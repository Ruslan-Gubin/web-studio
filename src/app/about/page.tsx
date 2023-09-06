import { CONFIG_APP } from "@/shared";
import { AboutPromo, AdvantagesAbout, ReviewList } from "@/widgets";

const img = 'https://res.cloudinary.com/ds289tkqj/image/upload/v1693732522/web-sdudio/ServiceSoftware_ke9ovb.jpg'
const textCenter = 'Работа с муниципальными объектами вывела нас на качественно новый уровень профессионализма и ответственности. Поэтому на сегодняшний день мы беремся за объекты любой сложности как для государства, так и для коммерческих организаций. Даже самые взыскательные клиенты выбирают нас, потому что практически в 100% случаев мы можем сказать: «да, у нас уже был подобный опыт».'
const mockUserImag = 'https://res.cloudinary.com/ds289tkqj/image/upload/v1683567683/Player/un08i1ra44uv5shfy2oo.jpg'

const about_promo = {
  title: 'О компании',
  image: img,
  textTop: 'Мы работаем на рынке строительства с 2001 года. За это время мы построили, отремонтировали, реконструировали более 480 социально-значимых муниципальных и коммерческих объектов (от детских садов до бизнес-центров).',
  textCenter: textCenter,
  textBottom: 'Стройцентр – это опыт, высокое качество и короткие сроки.',
  backgroundColor: '#dfe6e6',
  textColor: '',
}

const advantages_list: { imag: string, advantages: string[]}[] = [
  {
    imag: 'https://res.cloudinary.com/ds289tkqj/image/upload/v1693987467/web-sdudio/modern-tower-buildings-or-skyscrapers-in-financial-district-with-cloud-on-sunny-day-in-chicago--usa--construction-industry--business-enterprise-organization--or-communication-technology-concept-1153082516-a9f16c4ee_mdcwnk.jpg',
    advantages: ['Строим объекты полного цикла (от разрешения на строительство до ввода в эксплуатацию)', 'Реализуем строительные проекты по схеме «проектирование-строительство»', 'Организуем индивидуальные экскурсии по готовым объектам',  'Проведем бесплатный аудит Вашего проекта (соответствие ГОСТам, стандартам, нормам; возможности для оптимизации бюджета; анализ технологических решений)']
  },
  {
    imag: 'https://res.cloudinary.com/ds289tkqj/image/upload/v1693987652/web-sdudio/232a03f6e5a25c8a115c6061fbd1ecc8_zoxdts.jpg',
    advantages: ['Организуем самые современные средства связи: видео-наблюдение 24/7 на объекте, круглосуточный чат с командой объекта', 'Обеспечим еженедельную отчетность', 'Подберем и проведем пуско-наладку технологического оборудования для Вашего объекта', 'Обустроим образцово-показательную стройплощадку']
  },
]

const about_advantages = {
  title: 'Преимущества',
  backgroundColor: '',
  textColor: '',
  advantages_list,
}

const about_reviews = {
  title: 'Отзывы',
  backgroundColor: '#f3f3f3',
  textColor: '',
  reviews_list: [
    { image: mockUserImag, name: 'Ruslan', text: 'Nice and big variety of themes and templates. The best thing is their support though, very helpful and friendly.Nice and big variety of themes and templates. The best thing is their support though, very helpful and friendlyNice and big variety of themes and templates. The best thing is their support though, very helpful and friendly' },
    { image: mockUserImag, name: 'Anna', text: 'Awesome product and very Good customer support. Loved the UI kit design. Highly recommended.' },
    { image: mockUserImag, name: 'Viktoria', text: 'Nice and big variety of themes and templates. The best thing is their support though, very helpful and friendly.' },
    { image: mockUserImag, name: 'Sergey', text: 'Nice and big variety of themes and templates. The best thing is their support though, very helpful and friendly' },
    { image: mockUserImag, name: 'Ivan', text: 'Awesome product and very Good customer support. Loved the UI kit design. Highly recommended.' },
    { image: mockUserImag, name: 'Grigory', text: 'Nice and big variety of themes and templates. The best thing is their support though, very helpful and friendly.' },
    { image: mockUserImag, name: 'Djony', text: 'Nice and big variety of themes and templates. The best thing is their support though, very helpful and friendly.' },
  ]
}

export const metadata = CONFIG_APP.META_TAGS.aboutPage;

export default async function About() {
  return (
    <>
  <AboutPromo aboutData={about_promo} />
  <AdvantagesAbout advantagesData={about_advantages} />
  <ReviewList reviewsData={about_reviews} />
    </>
  )
}