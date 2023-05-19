import Card from "../UI/Card";

import classes from "./TodoList.module.css";

const TodoList = () => {
  return (
    <Card>
      <ul className={classes["todo-lists"]}>
        <button className={classes.button}>&#9634;</button>
        {/* <button className={classes.button}>&#9635;</button> */}
        <li>List</li>
        <button className={classes.button}>&#10060;</button>
      </ul>
    </Card>
  );
};

export default TodoList;
