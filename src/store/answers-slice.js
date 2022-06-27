import { createSlice } from "@reduxjs/toolkit";
const answersSlice = createSlice({
  name: "answers",
  initialState: {
    answers: [],
    numberOfQuestions: 0,
  },
  reducers: {
    addEmptyAnswer(state, action) {
      state.answers.push({
        questionId: action.payload.questionId,
        value: action.payload.value,
      });
      state.numberOfQuestions++;
    },
    addAnswer(state, action) {
      state.answers[action.payload.questionNumber-1].value = action.payload.value;
    },
  },
});

export const cartActions = answersSlice.actions;

export default answersSlice;
