import "./styles/globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "@/store/provider";
import { LayoutFooter, LayoutHeader } from "@/widgets";
import { CONFIG_APP } from "@/shared";

const inter = Roboto({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = CONFIG_APP.META_TAGS.homePage;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <LayoutHeader/>
      <Providers>
        {children}
      </Providers>
      <LayoutFooter/>
        </body>
    </html>
  );
}
