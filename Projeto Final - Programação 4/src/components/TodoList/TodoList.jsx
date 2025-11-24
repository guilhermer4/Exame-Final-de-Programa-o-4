import { useTodos } from "../../context/TodoContext";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList() {
  const { todos } = useTodos();

  if (todos.length === 0) return <p>Nenhuma tarefa adicionada.</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
