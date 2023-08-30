import { getServerSession } from "next-auth";
import { authConfig } from "./auth";

export type NavLink = {
  label: string;
  href: string;
};

export const getLinks = async(): Promise<NavLink[]> => {
  const navLinks: NavLink[] = [
    {label: 'Home', href: '/'},
    {label: 'Blog', href: '/blog'},
    {label: 'About', href: '/about'},
    {label: 'Sing in', href: '/signin'},
  ];
  const session = await getServerSession(authConfig);

  if (session?.user) {
    const profileObj = {label: 'Profile', href: '/profile'}
    navLinks.splice(-1, 0, profileObj)

    const currentSingnLabel = navLinks.at(-1)
   if (currentSingnLabel) {
     currentSingnLabel.label = 'Sing Out'
    }
  }
  return navLinks
}
