import { Fragment, useReducer } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const ACTIONS = {
  ADD_TASK: "add-task",
  DELETE_TASK: "delete-task",
  CHANGE_STATUS_TASK: "change-status-task",
};

const reducer = (state, actions) => {
  if (actions.type === ACTIONS.ADD_TASK) {
    return [...state, newTask(actions.payload.task)];
  } else if (actions.type === ACTIONS.DELETE_TASK) {
    return state.filter((task) => task.id !== actions.payload.id);
  }
  return state;
};

const newTask = (task) => {
  return {
    id: Date.now(),
    name: task,
    completed: false,
  };
};

const App = () => {
  const [todoList, dispatch] = useReducer(reducer, []);

  return (
    <Fragment>
      <h1>TODO LIST</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList data={todoList} dispatch={dispatch} />
    </Fragment>
  );
};

export default App;
