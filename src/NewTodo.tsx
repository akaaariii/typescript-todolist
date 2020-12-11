import React, { useRef } from 'react';
import './NewTodo.css';

interface NewToDoProps {
  addTodo: (text: string) => void;
}

const NewTodo: React.FC<NewToDoProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    // console.log(enteredText);
    props.addTodo(enteredText);
    inputRef.current!.value = '';
  }

  return (
    <form className="form-control" onSubmit={submitHandler}>
      <label htmlFor="todo-text">Todo:</label>
      <input type="text" id="todo-text" ref={inputRef} />
      <button type="submit">ADD TODO</button>
    </form>
  )
}

export default NewTodo;