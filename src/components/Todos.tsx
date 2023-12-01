import { useRef, useReducer } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

interface SingleTodo {
  id: number;
  text: string;
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD":
      let newTodos = [...state.todos, action.payload];
      return { ...state, todos: newTodos };
    case "DELETE":
      return { ...state, todos: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const Todos = () => {
  const idRef = useRef(0);
  const [state, dispatch] = useReducer(reducer, { todos: [] });

  const deleteTodo = (id: number) => {
    const listCopy = JSON.parse(JSON.stringify(state.todos));
    const activeTodos = listCopy.filter((todo: SingleTodo) => todo.id !== id);
    dispatch({ type: "DELETE", payload: activeTodos });
  };

  const createTodo = (value: string) => {
    dispatch({ type: "ADD", payload: { id: idRef.current, text: value } });
    idRef.current += 1;
  };

  return (
    <>
      <TodoInput createTodo={createTodo} />
      <ul>
        {state.todos.map((item: SingleTodo) => (
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
