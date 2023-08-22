import { configureStore } from "@reduxjs/toolkit";

import loginReducer from './loginSlice';
import confirmationReducer from "./confirmationSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    confirmation: confirmationReducer,
  }
});
