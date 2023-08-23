import { createSlice } from "@reduxjs/toolkit";

export const confirmationSlice = createSlice({
  name: 'confirmation',
  initialState: {
    show: false,
    content: {
      alertTyle: '',
      message: '',
    },
  },
  reducers: {
    showConfirmation: (state, action) => {
      state.content = action.payload;
      state.show = true;
    },
    hideConfirmation: (state) => {
      state.show = false;
      state.content = {
        alertTyle: '',
        message: '',
      };
    }
  },
});

export const { showConfirmation, hideConfirmation } = confirmationSlice.actions;
export default confirmationSlice.reducer;