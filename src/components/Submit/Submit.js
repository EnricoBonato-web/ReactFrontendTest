import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import classes from "./Submit.module.css";
import AnswerItem from "./AnswerItem";
import { uiActions } from "../../store/ui-slice";
import Card from "../UI/Card";
const Submit = (props) => {
  const answers = useSelector((state) => state.answers.answers);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <div id="myModalError" className={classes.modal} onClick={closeModal}>
      <Card class={classes.modalcontent}>
        <h2>Your Answers:</h2>
        <ul>
          {answers.map((answer) => {
            console.log(answer.questionId);
            return (
              <AnswerItem
                key={answer.questionId}
                id={answer.questionId}
                value={answer.value}
              />
            );
          })}
        </ul>
      </Card>
    </div>
  );
};

export default Submit;
