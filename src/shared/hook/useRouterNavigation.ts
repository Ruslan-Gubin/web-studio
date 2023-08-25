'use client'
import { useRouter, usePathname, useParams } from "next/navigation";

type NavigationMethod = 'push' | 'replace' | 'back' | 'forward';


export const useRouterNavigation = () => {
  const router = useRouter()
  const patchName = usePathname()
  const params = useParams()

  const navigate = (
    method: NavigationMethod = 'push',
    href: string,
  ) => {
    router[method](href, undefined);
  };

  const navigateDinamicId = (template: string, id: string) => {
    router.push(`${template}[id]`)
  }

  return {  
    pathname: patchName,
    query: params,
    navigateDinamicId,
    navigate,
  }
}
