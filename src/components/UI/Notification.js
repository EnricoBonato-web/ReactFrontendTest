import classes from "./Notification.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
const Notification = (props) => {
  const dispatch = useDispatch();

  const cssClasses = `${classes["modal-content"]} `;
  const closeModal = () => {
    dispatch(
      uiActions.showNotification({
        show: false,
        title: "",
        message: "",
      })
    );
  };
  return (
    <div id="myModalError" className={classes.modal} onClick={closeModal}>
      <section className={cssClasses}>
        <span className={classes.close} onClick={closeModal}>
          &times;
        </span>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </section>
    </div>
  );
};

export default Notification;
