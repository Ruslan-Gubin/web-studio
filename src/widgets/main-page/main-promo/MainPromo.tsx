import { OpenModal } from "@/features";
import { ContentContainer, ImageMain } from "@/shared";

import styles from "./MainPromo.module.scss";

type Props = {
  promoData: {
    background?: string;
    title?: string;
    description?: string;
    color?: string | null;
  };
};

const MainPromo = ({
  promoData: { background, description, title, color },
}: Props) => {
  return (
    <section className={styles.promo_wrapper}>
      {background && (
        <div className={styles.background_image}>
          <ImageMain
            src={background}
            width="100%"
            height="100%"
            priority={true}
            alt={'Background main page'}
          />
        </div>
      )}

      <ContentContainer>
        <div className={styles.promo_content}>
          <h1
            style={color ? { color } : { color: "white" }}
            className={styles.title}
          >
            {title ? title : ""}
          </h1>
          <p
            style={color ? { color } : { color: "white" }}
            className={styles.description}
          >
            {description ? description : ""}
          </p>
          <OpenModal
            size="lg"
            buttonText="Оставить заявку"
            subTitle="Мы рассчитаем стоимость вашего объекта в кратчайшие сроки"
            title="Напишите нам"
            variant="order"
          />
        </div>
      </ContentContainer>
    </section>
  );
};

export { MainPromo };
