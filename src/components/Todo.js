import { ACTIONS } from "../App";

import classes from "./Todo.module.css";

const Todo = ({ task, dispatch }) => {
  const deleteTaskHandler = (taskId) => {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: taskId } });
  };

  return (
    <div className={classes.list}>
      {/* <button className={classes.button}>&#9635;</button> */}
      <button className={classes.button}>&#9634;</button>
      <li>{task.name}</li>
      <button
        className={classes.button}
        onClick={() => deleteTaskHandler(task.id)}
      >
        &#10060;
      </button>
    </div>
  );
};

export default Todo;
