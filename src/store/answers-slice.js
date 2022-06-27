import { createSlice } from "@reduxjs/toolkit";

const answersSlice = createSlice({
  name: "answers",
  initialState: {
    answers: [],
    numberOfQuestions: 0,
  },
  reducers: {
    addEmptyAnswer(state, action) {
      state.answers.push([0]);
      state.numberOfQuestions++;
    },
    addAnswer(state, action) {
      const [questionNumber, value] = action.payload;
      state[questionNumber] = value;
    },
  },
});

export const cartActions = answersSlice.actions;

export default answersSlice;
