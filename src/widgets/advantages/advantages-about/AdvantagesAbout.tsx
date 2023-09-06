import {
  ContentContainer,
  ContentTitle,
  ImageMain,
  StylesSelection,
} from "@/shared";

import styles from "./AdvantagesAbout.module.scss";

type Props = {
  advantagesData: {
    title?: string | null;
    backgroundColor?: string;
    textColor?: string;
    advantages_list?: { imag?: string; advantages: string[] }[];
  };
};

const AdvantagesAbout = ({ advantagesData }: Props) => {
  const { backgroundColor, textColor, title, advantages_list } = advantagesData;

  const stylesSelection = new StylesSelection({ backgroundColor, textColor });
  const advantagesTitle = title ? title : "Преимущества";
  
  const getClasses = (index: number) => {
      const root = [styles.advantages_item]

      if (index % 2 !== 0) {
        root.push(styles.advantages_item__reverse)
      }
      return root.join(' ')
  }

  return (
    <section
      style={stylesSelection.styles}
      className={styles.advantagesWrapper}
    >
      <ContentContainer>
        <ContentTitle title={advantagesTitle} />
        <ul className={styles.advantages_list}>
          {advantages_list &&
            advantages_list.map((advantage, index) => (
              <li
                key={index}
                style={advantage.advantages.length === 0 ? {justifyContent: 'center'} : {}}
                className={getClasses(index)}
              >
                {advantage.imag &&
                <ImageMain
                className={advantage.advantages.length === 0 ? `${styles.advantages_item__image} ${styles.advantages_item__notext}` : styles.advantages_item__image}
                alt={`Advantage Image №${index + 1}`}
                src={advantage.imag}
                priority={index === 0 ? true : false}
                />
              }
              {advantage.advantages.length > 0 &&
                <ul className={!advantage.imag ? `${styles.advantages_text__list} ${styles.advantages_text__noimage}` : styles.advantages_text__list}>
                  {advantage.advantages.map((text, index) => (
                      <li key={index}>
                        <p className={styles.advantages_text__item}>{text}</p>
                      </li>
                    ))}
                </ul>
              }
              </li>
            ))}
        </ul>
      </ContentContainer>
    </section>
  );
};

export { AdvantagesAbout };
