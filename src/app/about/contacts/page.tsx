import { CONFIG_APP } from "@/shared";
import { ContactSection } from "@/widgets";

export const metadata = CONFIG_APP.META_TAGS.contactPage;

const company_list: MarkerType[] = [
  { coordinates: { lat: 47.9894, lng: 37.8443 }, 
  company_name: 'don-dev',
  phone: ['+7 (949) 419-71-55'],
  sity: 'Донецк',
  street: 'Творческая',
  house: '36',
  email: 'gubin_ruslan@rambler.ru',
  },
  { coordinates: { lat: 52.2497, lng: 104.3582 }, 
  company_name: 'стройцентр',
  phone: ['+7 (3952) 700 - 051', '+7 (914) 930-07-24'],
  sity: 'Иркутск',
  street: 'Байкальская',
  email: 'sales-irk@stroycenter.net',
  house: '318/3',
  },
  { coordinates: { lat: 47.9943, lng: 37.8466 }, 
  company_name: 'don-dev',
  phone: ['+7 (949) 419-71-55'],
  sity: 'Донецк',
  street: 'Харитонова',
  house: '2А',
  email: 'gubin_ruslan@rambler.ru',
  },
  { coordinates: { lat: 47.9877, lng: 37.8448 }, 
  company_name: 'don-dev',
  phone: ['+7 (949) 419-71-55'],
  sity: 'Донецк',
  street: 'Лабутенко',
  house: '2',
  email: 'gubin_ruslan@rambler.ru',
  },
]

const contactData = {
  title: 'Контакты',
  street: 'г.Иркутск, ул.Байкальская, 318/3',
  phones: ['+7 (3952) 700 - 051', '+7 (914) 930-07-24'],
  email: 'gubin_ruslan@rambler.ru',
  backgroundColor: null,
  colorText: null,
  company_list,  
}

export default async function Contact() {
  return (
    <ContactSection contactData={contactData} />
  );
}
