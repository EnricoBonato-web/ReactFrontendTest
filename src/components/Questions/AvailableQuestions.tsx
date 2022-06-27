import React, { useEffect, useState } from "react";
import QuestionItems from "./QuestionItem/QuestionItem";
import Card from "../UI/Card";
import QuestionItem from "../../types/QuestionItem";
import classes from "./AvailableQuestions.module.css";
import HeaderCartButton from "../Layout/SubmitButton";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import answersSlice from "../../store/answers-slice";
const AvailableQuestions = (props: { onShowCart: () => {} }) => {
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();
  const [submitted, setsubmitted] = useState(false);
  const changeHandler = (value: number, questionNumber: number) => {
    setsubmitted(true);
    dispatch(
      uiActions.showNotification({
        show: true,
        title: "error",
        message: "please",
      })
    );
  };

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
        dispatch(answersSlice.actions.addEmptyAnswer({}));

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
