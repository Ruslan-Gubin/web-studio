"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper/types";

import "swiper/css";
import styles from "./SwiperMain.module.scss";


type Props = {
  data: any[];
  SlideComponent: React.ComponentType<any>;
};

const SwiperMain = ({ SlideComponent, data }: Props) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const sliderSettings = {
    200: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    574: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    990: {
      slidesPerView: 2.34,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };

  const handleSwiperInit = (swiper: SwiperCore) =>  swiperRef.current = swiper;

  return (
    <div className={styles.swiper_container}>
      <div
        className={`${styles.swiper_prev__button} ${styles.swipper_array}`}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <button onClick={() => swiperRef.current?.slidePrev()} className={styles.button_press}></button>
      </div>

      <Swiper
        className={`${styles.swiper} mySwiper`}
        //@ts-ignore
        slidesPerView={1}
        breakpoints={sliderSettings}
        onBeforeInit={handleSwiperInit}
        loop={true}
      >
        <ul className={styles.services_list}>
          {data.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiper_item}>
              <SlideComponent data={{...item, id: index}} />
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
      <div
        className={`${styles.swiper_next__button} ${styles.swipper_array}`}
      >
        <button onClick={() => swiperRef.current?.slideNext()} className={styles.button_press}></button>
      </div>
    </div>
  );
};

export default SwiperMain;
