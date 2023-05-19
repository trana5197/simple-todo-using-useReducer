import { useState } from "react";

import Card from "../UI/Card";

import classes from "./TodoForm.module.css";

const TodoForm = () => {
  const [enteredTask, setEnteredTask] = useState("");

  const taskChangeHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  const taskSubmitHandler = (e) => {
    e.preventDefault();

    const task = {
      id: Date.now(),
      name: enteredTask,
      completed: false,
    };

    console.log(task);

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
