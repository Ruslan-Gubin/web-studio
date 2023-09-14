import {  useAppSelector } from "@/shared";
import { ModalModel } from "../domain/modal";
import { modalSlice } from "./slice";


const modalSelect = (state: RootState) => state.modal;
export const modalAction = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

export const useModalSelect = (): ModalModel => {
  return useAppSelector(modalSelect);
};



