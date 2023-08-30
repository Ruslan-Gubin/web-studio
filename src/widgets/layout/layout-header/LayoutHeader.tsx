'use server'
import { HeaderLeftSize } from './left-size/HeaderLeftSize';
import { HeaderRightSize } from './right-size/HeaderRightSize';
import { NavigationHeader } from './navigation/NavigationHeader';

import styles from './LayoutHeader.module.scss';
import { NavLink } from '@/shared';

const phoneList = ['+7 (949) 4197 - 155'];
const description = 'Более 20 лет строим по всей России';

const LayoutHeader = ({ links }: {links: NavLink[]}) => {
 
  return (
    <>
    <header className={styles.root}>
      <section className={styles.container}>
      <HeaderLeftSize description={description} />
      <HeaderRightSize phoneList={phoneList} />
      </section>
    </header>
      <NavigationHeader navLinks={links}/>
    </>
  );
};

export { LayoutHeader }