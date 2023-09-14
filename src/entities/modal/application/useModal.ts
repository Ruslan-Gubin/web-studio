import { useAppDispatch } from "@/shared";
import { ModalService } from "../domain/modal";
import { modalAction, VariantModal } from "../model";

type ArgsOpenModal = {
  buttonText: string;
  subTitle: string;
  title: string;
  variant: VariantModal;
};
const modalService = new ModalService()

export function useModalOpen() {
  const dispatch = useAppDispatch();

  function openModal(args: ArgsOpenModal) {

    const openModalParams = modalService.openModal({
      ...args,
      approval: false,
      isActive: true,
    })

    dispatch(modalAction.openModal(openModalParams));
  }

  return { openModal };
}

export function useModalClose() {
  const dispatch = useAppDispatch();

  function closeModal() {
    const closeModalParams = modalService.closeModal()
    dispatch(modalAction.closeModal(closeModalParams));
  }

  return { closeModal };
}

export function useToggleAproval() {
  const dispatch = useAppDispatch();

  function toggleApproval() {
    dispatch(modalAction.toggleApproval());
  }

  return { toggleApproval };
}
