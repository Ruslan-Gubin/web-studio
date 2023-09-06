import { OpenModal } from "@/features";
import { LayoutMenuButton } from "../../layout-menu-butto/LayoutMenuButton";
import { LayoutCallButton } from "../layout-call-button/LayoutCallButton";

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
      <div className={styles.call_btn_desctop}>
        <OpenModal
          buttonText="Заказать звонок"
          title="Заказать звонок"
          variant="call"
          subTitle="Наши менеджеры свяжутся c вами для обсуждения деталей"
        />
      </div>
      <div className={styles.call_btn_mobile}>
        <LayoutCallButton />
      </div>
      <div className={styles.menu_mobile}>
        <LayoutMenuButton />
      </div>
    </div>
  );
};

export { HeaderRightSize };
