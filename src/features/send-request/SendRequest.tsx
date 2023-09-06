import { useCallback } from "react";
import { VariantModal } from "@/entities";
import { ButtonRG } from "@/shared/ui/button-rg/ButtonRG";

type Inputs = {
  name: string;
  phone: string;
  area: string;
  title: string;
};

type Props = {
  buttonText: string | null;
  disabledCallButton: boolean;
  variant: VariantModal | null;
  inputs: Inputs;
  closeModal: () => void;
};

const SendRequest = ({ disabledCallButton, buttonText, variant, inputs, closeModal }: Props) => {
  
  const callRequest = useCallback(async({ phone }:{ phone: string }) => {
    console.log(phone)
  },[])
  
  const checkPriceRequest = useCallback(({ phone, name, area  }:{ phone: string, name: string, area: string }) => {
    console.log(phone, name, area)
  },[])
  
  const orderRequest =  useCallback(({ phone, area, title }:{ phone: string, title: string, area: string }) => {
    console.log(phone, area, title)
  },[])


  const handleSubmit = useCallback( async () => {
    switch (variant) {
      case 'call':
        callRequest({ phone: inputs.phone })
        closeModal()
        break;
      case 'check price':
        checkPriceRequest({ phone: inputs.phone, name: inputs.name, area: inputs.area })
        closeModal()
        break;
        case 'order':
          orderRequest({ phone: inputs.phone, title: inputs.title, area: inputs.area })
          closeModal()
          break;
        default:
           console.log('Failed to request not found')
          break;
    }
  }, [callRequest, checkPriceRequest, orderRequest, closeModal, inputs, variant ]);


  return (
    <ButtonRG
      color="orange"
      disabled={disabledCallButton}
      size="lg"
      type="submit"
      handleClick={handleSubmit}
    >
      {buttonText ? buttonText : "null"}
    </ButtonRG>
  );
};

export { SendRequest };
