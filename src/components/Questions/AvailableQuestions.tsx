import React, { useEffect, useState } from "react";
import QuestionItems from "./QuestionItem/QuestionItem";
import Card from "../UI/Card";
import QuestionItem from "../../types/QuestionItem";
import classes from "./AvailableQuestions.module.css";
import HeaderCartButton from "../Layout/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import answersSlice from "../../store/answers-slice";
const AvailableQuestions = () => {
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();
  const [submitted, setsubmitted] = useState(false);
  const answersSelector = useSelector((state: any) => state.answers.answers);

  useEffect(() => {
    const fetchedQuestions = async () => {
      setIsLoading(true);
      const response = await fetch(process.env.REACT_APP_FireBaseQuestions!);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();
      const loadedQuestions: QuestionItem[] = [];
      const loadedAnswers: number[] = [];

      for (const key in responseData) {
        dispatch(
          answersSlice.actions.addEmptyAnswer({ questionId: key, value: 0 })
        );

        loadedQuestions.push({
          id: key,
          text: responseData[key],
        });
        loadedAnswers.push(0);
      }

      setQuestions(loadedQuestions);
      setIsLoading(false);
    };

    fetchedQuestions().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [dispatch]);
  if (httpError) {
    return (
      <section className={classes.QuestionsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  if (isLoading) {
    return (
      <section className={classes.QuestionsLoading}>
        <p>loading...</p>
      </section>
    );
  }
  const allChecked = answersSelector.reduce(
    (partialSum: number, a: { value: number }) => partialSum * a.value,
    1
  );
  const changeHandler = () => {
    setsubmitted(true);

    if (allChecked === 0) {
      dispatch(
        uiActions.showNotification({
          show: true,
          title: "Error",
          message: "Please complete all the questions..",
        })
      );
    } else {
      dispatch(uiActions.toggle());
    }
  };
  const questionList = questions.map((question) => (
    <QuestionItems
      key={question.id}
      id={question.id}
      text={question.text}
      submitted={submitted}
    />
  ));
  return (
    <Card>
      <ul className="answer">{questionList}</ul>
      <HeaderCartButton onClick={changeHandler} />
    </Card>
  );
};
export default AvailableQuestions;
