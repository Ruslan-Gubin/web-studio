'use client'
import { ChangeEventHandler, memo } from "react";

import styles from "./TexareaModal.module.scss";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  colorBorderFocus?: "orange" | "red" | "blue" | "green";
  labelText: string;
}

const TexareaModal = memo(({  onChange, value, colorBorderFocus='orange', labelText }: Props) => {
 
  return (
    <>
    <label htmlFor="text-area" className={styles.label}>{labelText}</label>
    <textarea
    id="text-area"
    value={value} 
    onChange={onChange} 
    name="textarea"
    className={`${styles.textarea} ${styles[`area_input__${colorBorderFocus}`]}`}
    ></textarea>
    </>
  );
});
TexareaModal.displayName = 'TexareaModal'
export { TexareaModal };