import styles from "./LayoutFooter.module.scss";

const LayoutFooter = () => {

  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <span className={styles.footer_item}>Политика конфиденциальности</span>
        <span>© 2023 Стройцентр-Иркутск. Все права защищены.</span>
        <span className={styles.footer_item}>don-dev Создание сайта</span>
      </div>
    </footer>
  );
};

export { LayoutFooter };
