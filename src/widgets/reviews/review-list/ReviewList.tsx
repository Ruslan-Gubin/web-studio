import dynamic from "next/dynamic";
import { ContentContainer, ContentTitle, StylesSelection } from "@/shared";
import { ReviewItem } from "../review-item/ReviewItem";

import styles from "./ReviewList.module.scss";


type ReviewModel = {
  image: string;
}

type Props = { 
  reviewsData: {
    title?: string | null;
    backgroundColor: string | null;
    textColor: string;
    reviews_list: ReviewModel[];
  };
}

const ReviewList = ({ reviewsData }: Props) => {
  const { backgroundColor, textColor, title } = reviewsData
  const SwiperDynamic = dynamic(() => import('../../../shared/ui/swiper/SwiperMain'), {
    ssr: false,
  })

  const stylesSelection =  new StylesSelection({ backgroundColor, textColor })

  return (
    <section style={stylesSelection.styles} className={styles.reviews}>
    <ContentContainer>
    <ContentTitle title={title ? title : "О компании"} />
    <ul className={styles.reviews_list}>
    <SwiperDynamic SlideComponent={ReviewItem} data={reviewsData.reviews_list}/>
    </ul>
    </ContentContainer>
    </section>
  );
};

export  {ReviewList};