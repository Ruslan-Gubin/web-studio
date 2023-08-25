import { CONFIG_APP } from "@/shared";


export const metadata = CONFIG_APP.META_TAGS.aboutPage;

export default async function About() {
  return <h1>About page</h1>
}