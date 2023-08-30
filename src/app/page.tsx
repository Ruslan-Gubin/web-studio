import { OpenModal } from "@/features";
import styles from "./styles/pages/Home.module.scss";


export default async function Home() {

  return (
    <main className={styles.main}>
      <h1>Home Change Text</h1>
      <OpenModal 
      buttonText="Узнать стоимость"
      subTitle="Мы рассчитаем стоимость вашего объекта в кратчайшие сроки"
      title="Узнать стоимость"
      variant="check price"
      />
    </main>
  );
}
