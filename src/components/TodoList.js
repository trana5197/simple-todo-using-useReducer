import { ACTIONS } from "../App";
import Card from "../UI/Card";

import classes from "./TodoList.module.css";

const TodoList = (props) => {
  const { data } = props;

  const deleteTaskHandler = (taskId) => {
    props.dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: taskId } });
  };

  return (
    <Card>
      <ul className={classes["todo-lists"]}>
        {data.map((task) => {
          return (
            <div className={classes.list} key={task.id}>
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
        })}
      </ul>
    </Card>
  );
};

export default TodoList;
