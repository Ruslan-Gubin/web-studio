interface ModalRGProps {
  width?: number;
  active: boolean;
  children?: JSX.Element[] | JSX.Element;
  handleClose: () => void;
  title?: string;
  handleCancel?: () => void;
}

export type { ModalRGProps };
