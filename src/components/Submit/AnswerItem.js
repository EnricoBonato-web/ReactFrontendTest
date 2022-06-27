import classes from './AnswerItem.module.css'
const AnswerItem = (props) => {
  const { id, value } = props;

  return (
    <li key={id} className={classes.answer}>
      <p>
        {id} - {value}
      </p>
    </li>
  );
};

export default AnswerItem;
