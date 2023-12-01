interface TodoProps {
  text: string;
  id: number;
  deleteTodo: (id: number) => void;
}

const Todo = ({ text, id, deleteTodo }: TodoProps) => {
  const handleClick = (id: number) => {
    deleteTodo(id);
  };

  return (
    <li>
      {text}
      <button type="button" onClick={() => handleClick(id)}>
        Delete X
      </button>
    </li>
  );
};

export default Todo;
