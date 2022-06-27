import classes from "./AnswerItem.module.css";

const AnswerItem = (props) => {
  const { id, value } = props;

  return (
    <li className={classes.item} key={id}>
      <header>
        <h3>{id}</h3>
        <div className={classes.price}>
          ${value} <span className={classes.itemprice}>(${value}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{value}</span>
        </div>
      </div>
    </li>
  );
};

export default AnswerItem;
