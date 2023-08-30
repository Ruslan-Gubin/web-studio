import styles from "./HeaderLeftSize.module.scss";

const HeaderLeftSize = ({ description }: { description: string }) => {
  return (
    <div className={styles.header_left__size}>
      <div className={styles.logo_container}>
        <div className={styles.logo}>DON-DEV</div>
      </div>
      <h2 className={styles.description}>{description}</h2>
    </div>
  );
};

export { HeaderLeftSize };
