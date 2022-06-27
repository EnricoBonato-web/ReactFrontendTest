import React from "react";
import { useSelector } from "react-redux";

import classes from "./SubmitButton.module.css";

const CartButton = (props: any) => {
  const numberOfQuestions = useSelector(
    (state: any) => state.answers.numberOfQuestions
  );
  const numberOfAnswer = useSelector((state: any) => state.answers.answers);
  let count = 0;
  numberOfAnswer.forEach((answer: any) => {
    if (answer !== 0) count++;
  });
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Submit</span>
      <span className={classes.badge}>{count + "/" + numberOfQuestions}</span>
    </button>
  );
};

export default CartButton;
