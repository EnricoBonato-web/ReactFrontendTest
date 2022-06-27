import { configureStore } from "@reduxjs/toolkit";

import answersSlice from "./answers-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, answers: answersSlice.reducer },
});

export default store;
