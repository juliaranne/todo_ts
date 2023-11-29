import { render, screen, fireEvent } from "@testing-library/react";
import Todos from "../Todos";

test("should print input text to page", () => {
  render(<Todos />);

  const input = screen.getByLabelText("Enter todo");
  const submitButton = screen.getByText("submit");
  fireEvent.change(input, { target: { value: "test name" } });
  fireEvent.click(submitButton);

  expect(screen.getByText("test name")).toBeInTheDocument();
});
