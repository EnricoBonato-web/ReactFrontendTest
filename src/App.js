import { Fragment } from "react";
import { useSelector } from "react-redux";

import AvailableQuestions from "./components/Questions/AvailableQuestions";
import Notification from "./components/UI/Notification";
import Header from "./components/Layout/Header";

function App() {
  const notification = useSelector((state) => state.ui.notification.show);
console.log(notification);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Header />
      <AvailableQuestions />
    </Fragment>
  );
}

export default App;
