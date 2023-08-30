import { OpenModal } from "@/features";
import styles from "./HeaderRightSize.module.scss";

const HeaderRightSize = ({ phoneList }: { phoneList: string[] }) => {

  return (
    <div className={styles.header_info_right}>
      <div className={styles.phone_list}>
        <ul>
          {phoneList.map((phone) => (
            <li key={phone} className={styles.phone_list__item}>
              <span>{phone}</span>
            </li>
          ))}
        </ul>
      </div>
      <OpenModal
        buttonText="Заказать звонок"
        title="Заказать звонок"
        variant="call"
        subTitle="Наши менеджеры свяжутся c вами для обсуждения деталей"
      />
    </div>
  );
};

export { HeaderRightSize };
