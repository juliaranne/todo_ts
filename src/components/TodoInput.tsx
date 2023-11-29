interface TodoInputProps {
  createTodo: () => string;
  inputRef: HTMLInputElement;
}

const TodoInput = ({ createTodo, inputref }) => {
  return (
    <form onSubmit={createTodo}>
      <label>
        Enter todo
        <input ref={inputRef} type="text" />
      </label>
      <button>submit</button>
    </form>
  );
};

export default TodoInput;
