import { CONFIG_APP } from "@/shared";
import { AboutPromo } from "@/widgets";

const img = 'https://res.cloudinary.com/ds289tkqj/image/upload/v1693732522/web-sdudio/ServiceSoftware_ke9ovb.jpg'
const textCenter = 'Работа с муниципальными объектами вывела нас на качественно новый уровень профессионализма и ответственности. Поэтому на сегодняшний день мы беремся за объекты любой сложности как для государства, так и для коммерческих организаций. Даже самые взыскательные клиенты выбирают нас, потому что практически в 100% случаев мы можем сказать: «да, у нас уже был подобный опыт».'

const about = {
  title: 'О себе',
  image: img,
  textTop: 'Мы работаем на рынке строительства с 2001 года. За это время мы построили, отремонтировали, реконструировали более 480 социально-значимых муниципальных и коммерческих объектов (от детских садов до бизнес-центров).',
  textCenter: textCenter,
  textBottom: 'Стройцентр – это опыт, высокое качество и короткие сроки.',
  backgroundColor: '#dfe6e6',
  colorText: '#494949',
}

export const metadata = CONFIG_APP.META_TAGS.aboutPage;

export default async function About() {
  return (
    <>
  <AboutPromo aboutData={about} />
    </>
  )
}