import React from "react";
import Todo from "./Todo";
import { TodosType } from "../types";

const Todos = (props: TodosType) => {
  console.log(props.todos);
  return (
    <div className="todos">
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDeleteTodo={props.handleDeleteTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
