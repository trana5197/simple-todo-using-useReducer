import { ACTIONS } from "../App";

import classes from "./Todo.module.css";

const Todo = ({ task, dispatch }) => {
  const statusChangeHandler = (taskId) => {
    dispatch({ type: ACTIONS.CHANGE_STATUS_TASK, payload: { id: taskId } });
  };

  const deleteTaskHandler = (taskId) => {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: taskId } });
  };

  const status = task.status ? "\u25A0" : "\u25A1";

  const taskClass = task.status ? classes.completed : classes["not-completed"];

  return (
    <div className={classes.list}>
      <button
        className={classes["btn-status"]}
        onClick={() => statusChangeHandler(task.id)}
      >
        {status}
      </button>
      <li className={taskClass}>{task.name}</li>
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
