interface TodoProps {
  text: string;
  id: number;
  deleteTodo: (id: number, text: string) => void;
}

const Todo = ({ text, id, deleteTodo }: TodoProps) => {
  const handleClick = () => {
    deleteTodo(id, text);
  };

  return (
    <li>
      {text}
      <button type="button" onClick={handleClick}>
        Delete X
      </button>
    </li>
  );
};

export default Todo;
