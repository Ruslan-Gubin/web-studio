export type VariantModal = "call" | "check price" | "order" | "";


export type OpenModelProps = {
  title: string;
  variant: VariantModal;
  subTitle: string;
  buttonText: string;
};


