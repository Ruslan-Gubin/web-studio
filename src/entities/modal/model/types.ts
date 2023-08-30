export type VariantModal = "call" | "check price" | "order" | "";

export interface ModalInitState {
  isActive: boolean;
  title: string | null;
  subTitle: string | null;
  buttonText: string | null;
  variant: VariantModal | null;
  approval: boolean;
}

export type OpenModelProps = {
  title: string;
  variant: VariantModal;
  subTitle: string;
  buttonText: string;
};
