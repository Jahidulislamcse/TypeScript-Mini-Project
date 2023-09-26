export type TodoType = {
  id: number;
  title: string;
};

export type TodoProps = {
  todo: TodoType;
  handleDeleteTodo: Function;
};

export type TodosType = {
  todos: TodoType[];
  handleDeleteTodo: Function;
};
