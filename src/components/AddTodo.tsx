import React, { ChangeEvent, useState, FormEvent } from "react";

type Props = {
  handleAddNewTodo: Function;
};

export const AddTodo = (props: Props) => {
  const [title, setTitle] = useState(" ");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime().toString(),
      title,
    };
    props.handleAddNewTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-input">
        <label htmlFor="Todo Title"></label>
        <input
          type="text"
          value={title}
          name="title"
          onChange={handleChange}
          required
          autoFocus
        ></input>
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
};
