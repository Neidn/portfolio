import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalName: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalClose(state) {
      state.isOpen = false;
      state.modalName = "";
    },
    modalOpen(state, action) {
      state.isOpen = true;
      state.modalName = action.payload.modalName;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
