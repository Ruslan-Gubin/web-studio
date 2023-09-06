import styles from "./ContentTitle.module.scss";

const ContentTitle = ({ title }: { title: string }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default ContentTitle;
