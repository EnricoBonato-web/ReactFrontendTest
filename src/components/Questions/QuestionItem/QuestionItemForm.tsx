import React from "react";
import { useDispatch } from "react-redux";
import store from "../../../store";
import answersSlice from "../../../store/answers-slice";
import classes from "./QuestionItemForm.module.css";
const QuestionItemForm = (props: any) => {
  const dispatch = useDispatch();

  const onChange = (event: any) => {
    dispatch(
      answersSlice.actions.addAnswer({
        questionNumber: +props.id.charAt(props.id.length - 1),
        value: +event.target.value,
      })
    );
  };
  return (
    <ul className={classes.answer} onChange={onChange}>
      <li>
        <input type="radio" name={props.id} value="1" />
        <label>completely untrue </label>
      </li>
      <li>
        <input type="radio" name={props.id} value="2" />
      </li>
      <li>
        <input type="radio" name={props.id} value="3" />
      </li>
      <li>
        <input type="radio" name={props.id} value="4" />
      </li>
      <li>
        <input type="radio" name={props.id} value="5" />
      </li>
      <li>
        <input type="radio" name={props.id} value="6" />
        <label>completely true</label>
      </li>
    </ul>
  );
};
export default QuestionItemForm;
