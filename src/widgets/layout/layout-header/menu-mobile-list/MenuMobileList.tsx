"use client";
import { useCallback } from "react";
import { usePathname } from "next/navigation";
import { NavigationLink, NavLink } from "@/shared";
import { useMenuSelect, useToggleMenu } from "@/features/menu";

import styles from "./MenuMobileList.module.scss";

type Props = {
  navLinks: NavLink[];
  description: string;
  address: string;
  phones: string[];
  email: string;
};

const MenuMobileList = ({
  navLinks,
  description,
  address,
  email,
  phones,
}: Props) => {
  const { handleToggleMenu } = useToggleMenu()
  const { isOpen } = useMenuSelect(); 
  const pathname = usePathname();

  const checkActive = useCallback(
    (href: string) => {
      return pathname === href;
    },
    [pathname]
  );

  return (
    <section
      className={
        isOpen
          ? `${styles.active} ${styles.root}`
          : `${styles.close} ${styles.root}`
      }
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{description}</h2>
        <ul className={styles.link_list}>
          {navLinks.map((link) => (
            <li onClick={handleToggleMenu} key={link.href} className={styles.link_list__item}>
              <NavigationLink
                isActive={checkActive(link.href)}
                key={link.href}
                link={link}
              />
            </li>
          ))}
        </ul>
        <div className={styles.menu_coordinates}>
          <span className={styles.menu_coordinates__address}>{address}</span>
          <span className={styles.menu_coordinates__email}>{email}</span>
          <ul className={styles.menu_coordinates__phones}>
            {phones.map((phone) => (
              <li key={phone} className={styles.menu_coordinates__phone}>
                <span>{phone}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { MenuMobileList };
