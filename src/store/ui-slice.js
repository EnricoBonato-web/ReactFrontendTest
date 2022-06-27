import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { answersIsVisible: false, notification: {show:false,title:'',message:''} },
  reducers: {
    toggle(state) {
      state.answersIsVisible = !state.answersIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        show: action.payload.show,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
