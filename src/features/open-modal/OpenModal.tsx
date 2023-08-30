"use client";
import { OpenModelProps, useModalAction } from "@/entities";
import { ButtonRG } from "@/shared/ui/button-rg/ButtonRG";

interface Props extends OpenModelProps{};

const OpenModal = ({ buttonText, variant, title, subTitle }: Props) => {
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
    <ButtonRG handleClick={handleOpenModal} color="orange">
      {buttonText}
    </ButtonRG>
  );
};

export { OpenModal };
