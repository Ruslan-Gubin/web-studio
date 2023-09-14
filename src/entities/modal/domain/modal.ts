export type VariantModalModel = "call" | "check price" | "order" | "";

export type ModalModel = {
  [key: string]: unknown;
  isActive: boolean;
  title: string | null;
  subTitle: string | null;
  buttonText: string | null;
  variant: VariantModalModel | null;
  approval: boolean;
};

export class Modal {
  isActive: boolean;
  title: string | null;
  subTitle: string | null;
  buttonText: string | null;
  variant: VariantModalModel | null;
  approval: boolean;

  constructor(args: ModalModel) {
    (this.approval = args.approval),
      (this.buttonText = args.buttonText),
      (this.isActive = args.isActive ? args.isActive : false),
      (this.subTitle = args.subTitle),
      (this.title = args.title),
      (this.variant = args.variant);
  }
  get modalFields() {
    return {
      isActive: this.isActive,
      approval: this.approval,
      buttonText: this.buttonText,
      subTitle: this.subTitle,
      title: this.title,
      variant: this.variant,
    };
  }
}

export class ModalService {
  modalFields:  Modal | null
  constructor() {
    this.modalFields = null;
  }

  public openModal(args: ModalModel) {
    this.modalFields = new Modal({ ...args, isActive: true, approval: false })
    return this.modalFields.modalFields;
  }

  public closeModal() {
    this.modalFields = new Modal(this.closeModalFields())
    const fields = this.closeModalFields()
    return this.modalFields.modalFields;
  }

  private closeModalFields() {
    return {
      isActive: false,
      title: null,
      variant: null,
      subTitle: null,
      buttonText: null,
      approval: false,
    };
  }
}

