import React, { useState } from "react";
import Todos from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { TodoType } from "./types";

const todosData = [
  {
    id: 1,
    title: "title 1",
  },
  {
    id: 2,
    title: "title 2",
  },
  {
    id: 3,
    title: "title 3",
  },
  {
    id: 4,
    title: "title 4",
  },
];

const App = () => {
  const [todos, setTodos] = useState(todosData);

  const handleDeleteTodo = (id: number) => {
    console.log(id);
    const filterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodos);
  };

  const handleAddNewTodo = (newTodo: TodoType) =>{
    setTodos(prevState => [... prevState, newTodo]);
  }

  return (
    <div>
      <h2>TypeScript Todo App</h2>
      <AddTodo handleAddNewTodo={handleAddNewTodo}/>

      <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
