import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modalValue: false,
};
export const modalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      console.log(action.payload, "action");
      state.modalValue = action.payload;
    },
    hidModal: (state, action) => {
      state.modalValue = action.payload;
    },
  },
});
export const { showModal, hidModal } = modalSlice.actions;
export default modalSlice.reducer;
