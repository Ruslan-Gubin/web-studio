"use client";
import { OpenModal } from "@/features";
import { ImageMain } from "@/shared";
import styles from "./ServicesItem.module.scss";

type Props = {
  data: {
    image: string;
    title: string;
    description: string;
    workList: string[];
  };
};

const ServicesItem = (props: Props) => {
  const { description, image, title, workList } = props.data;

  return (
    <li key={title} className={styles.services_list__item}>
      <div className={styles.content}>
        <div className={styles.services_list__image}>
          <ImageMain
          className={styles.image}
            src={image}
            width={370}
            height={250}
            alt="Services image"
          />
        </div>
        <h2 className={styles.services_list__title}>{title}</h2>
        <p className={styles.services_list__description}>{description}</p>
        <ul className={styles.services_work__list}>
          {workList.map((work) => (
            <li key={work} className={styles.services_work__item}>
              {work}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.services_list__button}>
        <OpenModal
          size="lg"
          buttonText="Узнать стоимость"
          subTitle="Мы рассчитаем стоимость вашего объекта в кратчайшие сроки"
          title="Узнать стоимость"
          variant="check price"
        />
      </div>
    </li>
  );
};

export { ServicesItem };
