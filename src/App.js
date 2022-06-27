import { Fragment } from "react";
import { useSelector } from "react-redux";

import AvailableQuestions from "./components/Questions/AvailableQuestions";
import Notification from "./components/UI/Notification";
import Header from "./components/Layout/Header";
import Submit from "./components/Submit/Submit";

function App() {
  const notification = useSelector((state) => state.ui.notification);
  const submit = useSelector((state) => state.ui.answersIsVisible);
  return (
    <Fragment>
      {notification.show && (
        <Notification
          title={notification.title}
          message={notification.message}
        />
      )}
      {submit && <Submit />}
      <Header />
      <AvailableQuestions />
    </Fragment>
  );
}

export default App;
