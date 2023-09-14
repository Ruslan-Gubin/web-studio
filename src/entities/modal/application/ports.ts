import { ModalModel } from "../domain/modal";


export interface ModalStorageService {
  modal: ModalModel;
  openModal(args: ModalModel): void;
  closeModal(): void;
}