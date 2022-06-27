import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui-slice";
import classes from "./SubmitButton.module.css";

const CartButton = (props: any) => {
  const dispatch = useDispatch();
  const numberOfQuestions = useSelector(
    (state: any) => state.answers.numberOfQuestions
  );
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>Submit</span>
      <span className={classes.badge}>{numberOfQuestions}</span>
    </button>
  );
};

export default CartButton;
