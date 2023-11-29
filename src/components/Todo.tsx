interface TodoProps {
  text: string;
}

const Todo = ({ text }: TodoProps) => {
  return <li>{text}</li>;
};

export default Todo;
