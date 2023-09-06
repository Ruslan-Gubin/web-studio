import { ContentContainer, ContentTitle, ImageMain } from "@/shared";

import styles from "./MainAdvantagesList.module.scss";

type Props = {
  advantagesList: { image: string; title: string; description?: string }[];
  title?: string;
};

const MainAdvantagesList = ({ advantagesList, title }: Props) => {
  return (
    <ContentContainer>
      {title && (
        <div className={styles.titleContainer}>
          <ContentTitle title={title} />
        </div>
      )}
      <ul
        style={!title ? { paddingTop: 70 } : { paddingTop: 0 }}
        className={styles.advantages_list}
      >
        {advantagesList.map((advantages, index) => (
          <li key={index} className={styles.advantages_container}>
            <ImageMain
              priority={index === 0 ? true : false}
              src={advantages.image}
              height={64}
              width={64}
              borderRadius={5}
              alt={`Image advantages list`}
            />
            <h2 className={styles.advantages_container__title}>
              {advantages.title ? advantages.title : advantages.title}
            </h2>
            <span className={styles.advantages_container__description}>
              {advantages.description ? advantages.description : ""}
            </span>
          </li>
        ))}
      </ul>
    </ContentContainer>
  );
};

export { MainAdvantagesList };
