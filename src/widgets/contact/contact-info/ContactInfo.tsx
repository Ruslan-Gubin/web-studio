import { OpenModal } from '@/features';
import { ContentTitle } from '@/shared';
import type { ContactData } from '../ContactSection';

import styles from './ContactInfo.module.scss'

type Props = {
  contactData: ContactData
}

const ContactInfo = ({ contactData }: Props) => {
  const { email, phones,  title } = contactData

  return (
    <div className={styles.contact}>
      <ContentTitle title={title ? title : 'Контакты'} />
      <ul className={styles.contact_phones}>
        {phones && phones.map(phone =>
          <li key={phone} className={styles.contact_phones__item}>
            <span>тел. {phone}</span>
          </li>
        )}
      </ul>
      <span className={styles.contact_email}>{email ? email : ''}</span>
          <div className={styles.button_container}>
      <OpenModal
            size="lg"
            buttonText="Оставить заявку"
            subTitle="Мы рассчитаем стоимость вашего объекта в кратчайшие сроки"
            title="Напишите нам"
            variant="order"
            />
            </div>
    </div>
  );
};

export  {ContactInfo};