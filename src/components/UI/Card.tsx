import React from "react";
import classes from "./Card.module.css";

const Card = (props: { children: React.ReactNode; class?: string }) => {
  console.log(props.class);
  const style = `${classes.card} ${props.class?classes[props.class!.toString()]:''}`;
  return <div className={style}>{props.children}</div>;
};
export default Card;
