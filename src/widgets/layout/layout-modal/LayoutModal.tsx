'use client'
import {  ChangeEventHandler, useCallback, useState } from "react";
import { useModalAction, useModalSelect } from "@/entities";
import { Approval, InputRG, ModalRG, PhoneInput, TexareaModal } from "@/shared";
import { ButtonRG } from "@/shared/ui/button-rg/ButtonRG";

import styles from "./LayoutModal.module.scss";

const LayoutModal = () => {
  const { closeModal, toggleApproval } = useModalAction()
  const { isActive, title, variant, subTitle, buttonText, approval } = useModalSelect()
  const [phoneValue, setPhoneValue] = useState('')
  const [inputName, setInputName] = useState('')
  const [inputArea, setInputArea] = useState('')
  

  const handleClose = () => {
    closeModal()
  }

  const handleSubmit = () => {
    console.log('submit')
  }

  const handleInputName: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setInputName(e.target.value)
  },[])
 
const disabledCallButton = !approval || phoneValue.length < 15

  return (
    <>
      <ModalRG
      active={isActive}
      width={540}
      handleClose={handleClose}
      handleCancel={handleClose}
      title={title ? title : ''} 
      >
      <h2 className={styles.subTitle}>{subTitle}</h2>
     <InputRG
     error={false}
     errorText={'error name'}
     label="Имя"
     name='name'
     placeholder='Иван Петров'
     value={inputName}
     onChange={handleInputName}
     colorBorderFocus='orange'
     /> 
     <PhoneInput 
     getValue={setPhoneValue} 
     colorBorderFocus="orange" 
     required 
     errorText={false} 
     />
     <TexareaModal
     value={inputArea}
     onChange={(e) => setInputArea(e.target.value)}
     colorBorderFocus='orange'
     labelText="Описание задачи"
     />
     <Approval 
     approvalText="Даю согласие на обработку персональных данных"
     isActive={approval}
     toggleApproval={toggleApproval}
     />
        <div className={styles.button_container}>
        <ButtonRG
        color="orange"
        disabled={disabledCallButton}
        size="lg"
        type='submit'
        handleClick={handleSubmit}
        >{buttonText ? buttonText : 'null'}</ButtonRG>
        </div>
      </ModalRG>
    </>
  );
};

export  { LayoutModal };