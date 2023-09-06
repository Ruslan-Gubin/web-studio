"use client";
import { ChangeEventHandler, useCallback, useState } from "react";
import { useModalAction, useModalSelect } from "@/entities";
import { Approval, InputRG, ModalRG, PhoneInput, TexareaModal } from "@/shared";

import styles from "./LayoutModal.module.scss";
import { SendRequest } from "@/features";


const LayoutModal = () => {
  const { closeModal, toggleApproval } = useModalAction();
  const { isActive, title, variant, subTitle, buttonText, approval } =
    useModalSelect();
  const [phoneValue, setPhoneValue] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputArea, setInputArea] = useState("");
  const [inputTitle, setInputTitle] = useState("");


  const handleClose = useCallback(() => {
    closeModal();
    setInputName('')
    setInputArea('')
    setInputTitle('')
  }, [closeModal]);


  const handleInputName: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setInputName(e.target.value);
    },
    []
  );

  const handleInputTitle: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setInputTitle(e.target.value);
    },
    []
  );

  const handleInputArea: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (e) => {
      setInputArea(e.target.value);
    },
    []
  );

  const handleToggleApproval = useCallback(() => {
    toggleApproval();
  }, [toggleApproval]);

  const disabledCallButton = !approval || phoneValue.length < 15;

  return (
    <>
      <ModalRG
        active={isActive}
        width={540}
        handleClose={handleClose}
        handleCancel={handleClose}
        title={title ? title : ""}
      >
        <h2 className={styles.subTitle}>{subTitle}</h2>
        <>
          {variant === "check price" && (
              <InputRG
              formTarget="name"
                error={false}
                errorText="Ошибка в имени"
                label="Имя"
                name="name"
                placeholder="Иван Петров"
                value={inputName}
                onChange={handleInputName}
                colorBorderFocus="orange"
              />
          )}
        </>
        <>
          {variant === "order" && (
            <InputRG
              error={false}
              errorText="Ошибка в названии"
              label="Название"
              name="DON-DEV"
              placeholder="don-dev"
              value={inputTitle}
              onChange={handleInputTitle}
              colorBorderFocus="orange"
            />
          )}
        </>
        <div className={styles.separator}>
          <PhoneInput
            getValue={setPhoneValue}
            colorBorderFocus="orange"
            required
            errorText={false}
          />
        </div>
        <>
          {variant !== "call" && (
            <TexareaModal
              value={inputArea}
              onChange={handleInputArea}
              colorBorderFocus="orange"
              labelText="Описание задачи"
            />
          )}
        </>
        <Approval
          approvalText="Даю согласие на обработку персональных данных"
          isActive={approval}
          toggleApproval={handleToggleApproval}
        />
        <div className={styles.button_container}>
          <SendRequest 
          buttonText={buttonText} 
          disabledCallButton={disabledCallButton}
          variant={variant ? variant : null}
          inputs={{ name: inputName, phone: phoneValue, area: inputArea, title: inputTitle }}  
          closeModal={handleClose}
         />
        </div>
      </ModalRG>
    </>
  );
};

export { LayoutModal };
