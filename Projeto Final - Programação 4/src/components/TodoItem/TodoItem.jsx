import { useTodos } from "../../context/TodoContext";

export default function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <li style={{ marginBottom: 10 }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />

      <span
        style={{
          marginLeft: 10,
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() => removeTodo(todo.id)}
        style={{ marginLeft: 10, color: "red" }}
      >
        Excluir
      </button>
    </li>
  );
}
