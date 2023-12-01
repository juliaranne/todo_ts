import { useRef, useReducer } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

type SingleTodo = {
  id: number;
  text: string;
};

type State = {
  todos: SingleTodo[];
};

type Action = {
  type: string;
  payload: SingleTodo;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD":
      let newTodos = [...state.todos, action.payload];
      return { ...state, todos: newTodos };
    case "DELETE":
      const remainingTodos = state.todos.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, todos: remainingTodos };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const Todos = () => {
  const idRef = useRef(0);
  const [state, dispatch] = useReducer(reducer, { todos: [] });

  const deleteTodo = (id: number, text: string) => {
    dispatch({ type: "DELETE", payload: { id, text } });
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
