"use client";
import { ImageMain } from "@/shared";
import { StarsSvg } from "../stars-svg/StarsSvg";

import styles from "./ReviewItem.module.scss";

type Props = {
  data: {
    image: string;
    name: string;
    text: string;
    priority: boolean;
  };
};

const ReviewItem = ({ data }: Props) => {
  return (
    <div className={styles.review}>
      <div className={styles.review_header}>
        <div className={styles.header_container}>
          <div className={styles.review_header__stars}>
            <ul className={styles.review__star_list}>
              {new Array(5).fill(1).map((_, index) => (
                <li key={index}>
                  <StarsSvg gray={index > 3} />
                </li>
              ))}
            </ul>
          </div>
          <span className={styles.review_header__time}>March 14, 2021</span>
        </div>
        <div className={styles.review_text__container}>
          <p className={styles.review_text}>{data.text}</p>
        </div>
      </div>
      <div className={styles.review_footer}>
        <ImageMain
          className={styles.review_image}
          alt={`Image review ${data.name}`}
          src={data.image}
          priority={false}
        />
        <h3 className={styles.review_name}>{data.name}</h3>
      </div>
    </div>
  );
};

export { ReviewItem };
