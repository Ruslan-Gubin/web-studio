import { ImageMain } from "@/shared";
import ContentTitle from "@/shared/ui/content-title/ContentTitle";
import styles from "./AboutPromo.module.scss";

type Props = {
  aboutData: {
    title?: string | null;
    image?: string;
    textTop?: string;
    textCenter?: string;
    textBottom?: string;
    backgroundColor: string;
    colorText: string;
  };
};

const AboutPromo = ({ aboutData }: Props) => {
  const {
    image,
    textBottom,
    textCenter,
    textTop,
    title,
    backgroundColor,
    colorText,
  } = aboutData;

  const stylesColor = {
    backgroundColor: backgroundColor ? backgroundColor : "#dfe6e6",
    color: colorText ? colorText : "#494949",
  };

  return (
    <section style={stylesColor} className={styles.root}>
      <div className={styles.container}>
        <ContentTitle title={title ? title : "О компании"} />
        {textTop && <p className={styles.top_text}>{textTop}</p>}
        <div
          style={!image && !textCenter ? { display: "none" } : {}}
          className={styles.center_container}
        >
          {textCenter && (
            <p
              className={
                !image
                  ? `${styles.center_text} ${styles.no_image}`
                  : styles.center_text
              }
            >
              {textCenter}
            </p>
          )}
          <div
            style={!image ? { display: "none" } : {}}
            className={
              !textCenter
                ? `${styles.center_image} ${styles.no_text}`
                : styles.center_image
            }
          >
            {image && (
              <ImageMain
                alt="About promo image"
                width={"100%"}
                height={"100%"}
                src={image}
                priority
              />
            )}
          </div>
        </div>
        <p className={styles.text}>{textBottom}</p>
      </div>
    </section>
  );
};

export { AboutPromo };
