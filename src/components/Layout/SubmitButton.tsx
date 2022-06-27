import React from "react";
import { useSelector } from "react-redux";

import classes from "./SubmitButton.module.css";

const SubmitButton = (props: any) => {
  const numberOfQuestions = useSelector(
    (state: any) => state.answers.numberOfQuestions
  );
  const numberOfAnswer = useSelector((state: any) => state.answers.answers);
  let count = 0;
  numberOfAnswer.forEach((answer: {questionId:string,value:number}) => {
    if (answer.value !== 0) count++;
  });
  const style=`${classes.button} ${classes.bump}`
  return (
    <button className={style} onClick={props.onClick}>
      <span>Submit</span>
      <span className={classes.badge}>{count + "/" + numberOfQuestions}</span>
    </button>
  );
};

export default SubmitButton;
