import { ModalModel } from "../domain/modal";

const initialState: ModalModel = {
  isActive: false,
  title: null,
  variant: null,
  subTitle: null,
  buttonText: null,
  approval: false,
}

export { initialState }