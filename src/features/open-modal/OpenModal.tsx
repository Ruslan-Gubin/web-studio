"use client";
import { OpenModelProps, useModalAction } from "@/entities";
import { ButtonRG } from "@/shared/ui/button-rg/ButtonRG";

interface Props extends OpenModelProps { 
  size?: "sm" | "md" | "lg" 
};

const OpenModal = ({ buttonText, variant, title, subTitle, size }: Props) => {
  const { openModal } = useModalAction();

  const handleOpenModal = () => {
    openModal({
      title,
      variant,
      subTitle,
      buttonText,
    });
  };

  return (
    <ButtonRG size={size} handleClick={handleOpenModal} color="orange">
      {buttonText}
    </ButtonRG>
  );
};

export { OpenModal };
