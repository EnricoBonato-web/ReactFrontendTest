import React from "react";
import { useSelector } from "react-redux";
import classes from "./QuestionItem.module.css";
import QuestionItemForm from "./QuestionItemForm";

const QuestionItems = (props: {
  id: string;
  text: string;
  submitted: boolean;
}) => {
  const answered = useSelector((state: any) => state.answers.answers);
  const style = `${
    answered[+props.id.charAt(props.id.length - 1) - 1] === 0 &&
    props.submitted &&
    classes.error
  } ${props.id}`;
  return (
    <div className={style}>
      <p className="question">{props.text}</p>
      <div>
        <QuestionItemForm id={props.id}  />
      </div>
    </div>
  );
};
export default QuestionItems;
