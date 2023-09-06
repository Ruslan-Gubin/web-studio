import { memo } from "react";
import styles from "./Approval.module.scss";

type Props = {
  approvalText: string;
  isActive: boolean;
  toggleApproval: () => void;
}

const Approval = memo(({ approvalText, isActive, toggleApproval }: Props) => {

  return (
    <button type='submit'  onClick={toggleApproval} className={styles.approval_wrapper}>
        <div className={isActive ? `${styles.approval_checkbox} ${styles.approval_checkbox__active}` : styles.approval_checkbox}></div>
        <p className={styles.approval_text}>{approvalText}</p>
     </button>
  );
});

Approval.displayName = 'Approval'

export { Approval };