import { useAppDispatch, useAppSelector } from "@/shared";
import { modalSlice } from "./slice";
import { OpenModelProps } from "./types";


const modalSelect = (state: RootState) => state.modal;
const modalAction = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

export const useModalSelect = () => {
  return useAppSelector(modalSelect);
};

export const useModalAction = () => {
  const dispatch = useAppDispatch();

  return {
    openModal: ({title, variant, subTitle, buttonText}: OpenModelProps) => dispatch(modalAction.openModal({ title, variant, subTitle, buttonText })),
    closeModal: () => dispatch(modalAction.closeModal()),
    toggleApproval: () => dispatch(modalAction.toggleApproval()),
  };
};

