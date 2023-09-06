import ContentTitle from '@/shared/ui/content-title/ContentTitle';
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
    </div>
  );
};

export  {ContactInfo};