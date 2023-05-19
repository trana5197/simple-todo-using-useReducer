import { Fragment } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Fragment>
      <h1>TODO LIST</h1>
      <TodoForm />
      <TodoList />
    </Fragment>
  );
};

export default App;
