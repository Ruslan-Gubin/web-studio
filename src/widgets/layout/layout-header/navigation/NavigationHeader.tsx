"use client";
import { useCallback } from 'react';
import {  signOut } from 'next-auth/react';
import { usePathname } from "next/navigation";
import { NavigationLink, NavLink } from '@/shared';

import styles from './NavigationHeader.module.scss';

type Props = {
  navLinks: NavLink[]
}

const NavigationHeader = ({ navLinks }: Props) => {
  const pathname = usePathname();

  const handleSingOut = useCallback(( label: string ) => {
    if ( label !== 'Sing Out') {
      return
    }
    
    signOut({callbackUrl: '/'})
  },[])



  const checkActive = useCallback((href: string) => {
    return pathname === href;
  },[pathname]);

  return (
    <div className={styles.root}>
      <ul className={styles.container}>

     {navLinks.map(link => 
       <li key={link.href}>
        <NavigationLink
        isActive={checkActive(link.href)}
        key={link.href}
        link={link} 
        onClick={handleSingOut}
        />
        </li>
      )} 
      </ul>
    </div>
  );
};
NavigationHeader.displayName = 'NavigationHeader'
export  { NavigationHeader };