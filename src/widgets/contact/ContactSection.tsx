import { MAPBOX_STYLE, MAPBOX_TOKEN, StylesSelection } from "@/shared";
import { ContactInfo } from "./contact-info/ContactInfo";
import { ContactMap } from "./contact-map/ContactMap";

import styles from "./ContactSection.module.scss";

export type ContactData = {
  title?: string;
  street?: string;
  phones?: string[];
  email?: string;
  backgroundColor: string | null;
  textColor?: string | null;
  company_list: MarkerType[]
};

type Props = {
  contactData: ContactData;
}; 

const ContactSection = ({ contactData }: Props) => {
  const { backgroundColor, textColor } = contactData 

  const stylesSelection =  new StylesSelection({ backgroundColor, textColor })

  const mapConfig = {
    token: MAPBOX_TOKEN!,
    style: MAPBOX_STYLE!,
  }

  return (
    <div style={stylesSelection.styles} className={styles.root}>
      <ContactInfo contactData={contactData} />
      {contactData.company_list.length > 0 &&  
      <ContactMap  markers={contactData.company_list} mapConfig={mapConfig}  />
      }
    </div>
  );
};

export { ContactSection };
