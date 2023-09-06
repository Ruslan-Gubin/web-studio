import "./styles/globals.scss";
import type { Metadata } from "next";
import { Providers } from "@/store/provider";
import { LayoutFooter,  LayoutHeader,  LayoutModal } from "@/widgets";
import { CONFIG_APP, getLinks } from "@/shared";
 
import styles from './styles/pages/Layout.module.scss'; 

export const metadata: Metadata = CONFIG_APP.META_TAGS.homePage;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = await getLinks()

  return (
    <html lang="ru">
      <body className={styles.body}>
        <div className={styles.container}>
      <Providers>
      <LayoutHeader links={links} />
      <div className={styles.opasity_links}></div>
      <main className={styles.main}>
        {children}
      </main>
      <LayoutModal />
      <LayoutFooter/>
      </Providers>
        </div>
        </body>
    </html>
  );
}
