import { HeaderLeftSize } from './left-size/HeaderLeftSize';
import { HeaderRightSize } from './right-size/HeaderRightSize';
import { NavigationHeader } from './navigation/NavigationHeader';
import { ContentContainer, NavLink } from '@/shared';
import { MenuMobileList } from './menu-mobile-list/MenuMobileList';

import styles from './LayoutHeader.module.scss';

const phoneList = ['+7 (949) 4197 - 155'];
const description = 'Более 20 лет строим по всей России';

const LayoutHeader = ({ links }: {links: NavLink[]}) => {

  return (
    <header className={styles.wrapper}>
    <section className={styles.root}>
        <ContentContainer>
      <section className={styles.container}>
      <HeaderLeftSize description={description} />
      <HeaderRightSize phoneList={phoneList} />
      </section>
        </ContentContainer>
    </section>
      <NavigationHeader navLinks={links}/>
      <MenuMobileList 
      address='г.Иркутск, ул.Байкальская, 318/3'
      email='sales-irk@stroycenter.net'
      phones={phoneList}
      navLinks={links} 
      description={description} 
      />
    </header>
  );
};

export { LayoutHeader }