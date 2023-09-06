import { ContactInfo } from "./contact-info/ContactInfo";
import { ContactMap } from "./contact-map/ContactMap";

import styles from "./ContactSection.module.scss";

export type ContactData = {
  title?: string;
  street?: string;
  phones?: string[];
  email?: string;
  backgroundColor?: string | null;
  colorText?: string | null;
  company_list: MarkerType[]
};

type Props = {
  contactData: ContactData;
}; 

const ContactSection = ({ contactData }: Props) => {
  const { backgroundColor, colorText } = contactData 

  const stylesColor = {
    backgroundColor: backgroundColor ? backgroundColor : "#ffffff",
    color: colorText ? colorText : "#494949",
  };

  return (
    <div style={stylesColor} className={styles.root}>
      <ContactInfo contactData={contactData} />
      {contactData.company_list.length > 0 &&  
      <ContactMap  markers={contactData.company_list}  />
      }
    </div>
  );
};

export { ContactSection };
