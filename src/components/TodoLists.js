import Todo from "./Todo";

import Card from "../UI/Card";

import classes from "./TodoLists.module.css";

const TodoList = (props) => {
  const { data } = props;

  // const taskClass = `${data}`;

  return (
    <Card>
      <ul className={classes["todo-lists"]}>
        {data.map((task) => {
          return <Todo task={task} dispatch={props.dispatch} key={task.id} />;
        })}
      </ul>
    </Card>
  );
};

export default TodoList;
