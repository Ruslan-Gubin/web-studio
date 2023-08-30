"use client";
import { useCallback, useEffect, useRef } from "react";

import styles from "./PhoneInput.module.scss";

type Props = {
  colorBorderFocus: "orange" | "red" | "blue" | "green";
  errorText?: boolean;
  required?: boolean;
  getValue: (value: string) => void;
};

const PhoneInput = ({
  colorBorderFocus,
  errorText,
  required,
  getValue,
}: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const phoneFormat = useCallback(
    (e: Event) => {
      const target = e.target as HTMLInputElement;

      if (Number.isNaN(target.value)) {
        console.log(target.value);
      }

      let content: string | string[] = target.value;
      if (!content) return;
      content = Array.from(content).filter(
        (ltr) => ltr.charCodeAt(0) > 47 && ltr.charCodeAt(0) < 58
      );

      if (Number.isNaN(+content[0])) {
        content[0] = "";
      }

      switch (content[0]) {
        case "8":
          content[0] = "7";
          break;
        case "9":
          content.unshift("7");
          break;
        default:
          break;
      }

      let [countryCode, operatorCode, number3, number21, number22] = [
        content[0],
        content.slice(1, 4).join(""),
        content.slice(4, 7).join(""),
        content.slice(7, 9).join(""),
        content.slice(9, 11).join(""),
      ];

      target.value = countryCode.length ? `${countryCode}` : "";
      if (operatorCode.length) target.value += `(${operatorCode}`;
      if (number3.length) {
        target.value += `)${number3}`;
      }
      if (number21.length) target.value += `-${number21}`;
      if (number22.length) target.value += `-${number22}`;
      getValue(target.value);
    },
    [getValue]
  );

  useEffect(() => {
    const refValue = ref.current;
    if (!refValue) return;

    const handleInput = (e: Event) => {
      phoneFormat(e);
    };

    refValue.addEventListener("input", handleInput);
    return () => {
      refValue.removeEventListener("input", handleInput);
    };
  }, [phoneFormat]);

  return (
    <div className={styles.input_container}>
      <span className={styles.country}>+</span>
      {errorText ? (
        <span className={styles.error}>Неверный номер телефона</span>
      ) : (
        <label
          htmlFor="phone"
          className={
            required ? `${styles.label} ${styles.label_required}` : styles.label
          }
        >
          Номер телефона
        </label>
      )}
      <input
        id="phone"
        placeholder="7(_ _ _) _ _ _ - _ _ - _ _"
        className={`${styles.phone_input} ${
          styles[`phone_input__${colorBorderFocus}`]
        }`}
        type="text"
        ref={ref}
      />
    </div>
  );
};

export { PhoneInput };
