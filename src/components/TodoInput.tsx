import React, { useRef } from "react";

interface TodoInputProps {
  createTodo: (value: string) => void;
}

const TodoInput = ({ createTodo }: TodoInputProps) => {
  console.log("hlds");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef?.current?.value.trim()) {
      createTodo(inputRef?.current?.value.trim());
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter todo
        <input ref={inputRef} type="text" />
      </label>
      <button>submit</button>
    </form>
  );
};

export default React.memo(TodoInput);
