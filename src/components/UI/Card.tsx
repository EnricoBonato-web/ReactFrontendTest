import React from "react";
import classes from "./Card.module.css";

const Card = (props: { children: React.ReactNode; class?: string }) => {
  const style = `${classes.card} ${props.class}`;
  return <div className={style}>{props.children}</div>;
};
export default Card;
