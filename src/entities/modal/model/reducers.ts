import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { ModalInitState, OpenModelProps } from "./types";

export const reducers = {

  openModal(state: ModalInitState, action: PayloadAction<OpenModelProps>) {
    state.isActive = true;
    state.title = action.payload.title;
    state.variant = action.payload.variant;
    state.subTitle = action.payload.subTitle;
    state.buttonText = action.payload.buttonText;
  },
  
  closeModal(state: ModalInitState) {
    state.isActive = false;
    state.title = null;
    state.variant = null;
    state.subTitle = null;
    state.buttonText = null;
  },

  toggleApproval(state: ModalInitState) {
    state.approval = !state.approval
  },

};
