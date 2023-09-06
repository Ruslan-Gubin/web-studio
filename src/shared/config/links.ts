export type NavLink = {
  label: string;
  href: string;
};

export const getLinks = async(): Promise<NavLink[]> => {
  const navLinks: NavLink[] = [
    {label: 'Главная', href: '/'},
    {label: 'Услуги', href: '/services'},
    {label: 'O нас', href: '/about'},
    {label: 'Проекты', href: '/portfolio'},
    {label: 'Контакты', href: '/about/contacts'},
  ];

  return navLinks
}
