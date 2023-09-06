import {  MainAdvantagesList, MainPromo } from "@/widgets";

import styles from "./styles/pages/Home.module.scss";

const promoData = {
  background:
    "https://res.cloudinary.com/ds289tkqj/image/upload/v1693587632/web-sdudio/g.foolcdn_fddfa2.webp",
  title: "Строительство, ремонт коммерческой недвижимости под ключ",
  description:"Полный цикл от проекта до ввода в эксплуатацию Гостиницы, бизнес-центры, клиники, склады Объекты любой сложности точно в срок",
  color: null,

};

const advantages = {
  title: 'Особенности',
  advantagesList: [
    {
      image: 'https://res.cloudinary.com/ds289tkqj/image/upload/v1678177043/Category%20image/p00kjso6whv18d5o1oq4.jpg', 
      title: '21 год', 
      description: 'строим объекты для бизнеса и государства'
    },
    {
      image: 'https://res.cloudinary.com/ds289tkqj/image/upload/v1678175222/Category%20image/p4cyc9xv7umashlniqw0.webp', 
      title: '480+', 
      description: 'сданных в срок объектов'
    },
  {
    image: 'https://res.cloudinary.com/ds289tkqj/image/upload/v1678177592/Category%20image/kylx0cuhrrx21evehsin.webp', 
    title: '50+', 
    description: 'квалифицированных инженеров в штате'
  },
  {
    image: 'https://res.cloudinary.com/ds289tkqj/image/upload/v1678177307/Category%20image/mio7j7gix3xnpg3hkvdv.jpg', 
    title: '3 млрд руб', 
    description: 'допуск СРО'
  },
]
}

export default async function Home() {
  return (
    <section className={styles.main}>
    <MainPromo promoData={promoData} />
    <MainAdvantagesList title={advantages.title ? advantages.title : ''} advantagesList={advantages.advantagesList} />
    </section>
  );
}
