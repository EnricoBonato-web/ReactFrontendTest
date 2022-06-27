const AnswerItem = (props) => {
  const { id, value } = props;

  return (
    <li key={id}>
      <h3>
        {id} - {value}
      </h3>
    </li>
  );
};

export default AnswerItem;
