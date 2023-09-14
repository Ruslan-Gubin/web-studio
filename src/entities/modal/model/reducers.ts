import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { ModalModel } from "../domain/modal";

export const reducers = {

  openModal(state: ModalModel, action: PayloadAction<ModalModel>) {
    for (const field in action.payload) {
      state[field] = action.payload[field]
    }
  },
  
  closeModal(state: ModalModel, action: PayloadAction<ModalModel>) {
    for (const field in action.payload) {
      state[field] = action.payload[field]
    }
  },

  toggleApproval(state: ModalModel) {
    state.approval = !state.approval
  },

};
