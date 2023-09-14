"use client";
import { OpenModelProps, useModalOpen } from "@/entities";
import { ButtonRG } from "@/shared/ui/button-rg/ButtonRG";

interface Props extends OpenModelProps { 
  size?: "sm" | "md" | "lg" 
};

const OpenModal = ({ buttonText, variant, title, subTitle, size }: Props) => {
  const { openModal } = useModalOpen();

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
