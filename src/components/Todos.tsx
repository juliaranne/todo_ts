import { useRef, useState } from "react";
import Todo from "./Todo";

interface SingleTodo {
  id: number;
  text: string;
}

const Todos = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(0);
  const [todoList, setTodoList] = useState<SingleTodo[]>([]);

  const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef?.current?.value.trim()) {
      setTodoList([
        { id: idRef.current, text: inputRef.current.value },
        ...todoList,
      ]);
      idRef.current += 1;
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <ul>
        {todoList.map((item) => (
          <Todo key={item.id} text={item.text} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
