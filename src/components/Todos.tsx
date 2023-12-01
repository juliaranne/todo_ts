import { useRef, useState, useCallback } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

interface SingleTodo {
  id: number;
  text: string;
}

const Todos = () => {
  const idRef = useRef(0);
  const [todoList, setTodoList] = useState<SingleTodo[]>([]);

  const deleteTodo = (id: number) => {
    const listCopy = JSON.parse(JSON.stringify(todoList));
    const activeTodos = listCopy.filter((todo: SingleTodo) => todo.id !== id);
    setTodoList(activeTodos);
  };

  const createTodo = useCallback(
    (value: string) => {
      setTodoList([{ id: idRef.current, text: value }, ...todoList]);
      idRef.current += 1;
    },
    [todoList]
  );

  return (
    <>
      <TodoInput createTodo={createTodo} />
      <ul>
        {todoList.map((item) => (
          <Todo
            deleteTodo={deleteTodo}
            key={item.id}
            text={item.text}
            id={item.id}
          />
        ))}
      </ul>
    </>
  );
};

export default Todos;
