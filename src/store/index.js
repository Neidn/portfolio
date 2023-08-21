import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import modalReducer, { modalActions } from "./slices/Modal";

const rootReducer = combineReducers({
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

const StoreWrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const storeActions = {
  modal: modalActions,
};

export { storeActions };

export default StoreWrapper;
