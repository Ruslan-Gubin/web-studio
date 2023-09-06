import { ContentContainer } from "@/shared";
import ContentTitle from "@/shared/ui/content-title/ContentTitle";
import { ServicesItem } from "../services-item/ServicesItem";
import dynamic from "next/dynamic";

import styles from "./MainAdvantagesList.module.scss";

type Props = {
  title: string;
  servicesData: { 
    image: string; 
    title: string; 
    description: string; 
    workList: string[];
  }[];
};

const ServicesList = ({ title, servicesData }: Props) => {
  const SwiperDynamic = dynamic(() => import('../../../shared/ui/swiper/SwiperMain'), {
    ssr: false,
  })

  return (
    <section className={styles.services_list__wrapper}>
      <ContentContainer>
      <ContentTitle title={title}/>
      <SwiperDynamic SlideComponent={ServicesItem} data={servicesData}/>
      </ContentContainer>
    </section>
  );
};

export { ServicesList };
