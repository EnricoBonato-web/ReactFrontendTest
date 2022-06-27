import React from "react";
import { useSelector } from "react-redux";

import classes from "./SubmitButton.module.css";

const CartButton = (props: any) => {
  const numberOfQuestions = useSelector(
    (state: any) => state.answers.numberOfQuestions
  );
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Submit</span>
      <span className={classes.badge}>{numberOfQuestions}</span>
    </button>
  );
};

export default CartButton;
