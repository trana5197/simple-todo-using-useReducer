import { useState } from "react";

import { ACTIONS } from "../App";
import Card from "../UI/Card";

import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const { dispatch } = props;

  const [enteredTask, setEnteredTask] = useState("");

  const taskChangeHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  const taskSubmitHandler = (e) => {
    e.preventDefault();

    const task = enteredTask;

    dispatch({ type: ACTIONS.ADD_TASK, payload: { task: task } });

    setEnteredTask("");
  };

  return (
    <Card>
      <form className={classes["todo-form"]} onSubmit={taskSubmitHandler}>
        <label className={classes.label}>Enter the task: </label>
        <input
          className={classes.input}
          type="text"
          value={enteredTask}
          onChange={taskChangeHandler}
        />
        <button className={classes.button} type="submit">
          Add me!
        </button>
      </form>
    </Card>
  );
};

export default TodoForm;
