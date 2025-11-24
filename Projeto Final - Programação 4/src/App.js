import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { TodoProvider } from "./context/TodoContext";

export default function App() {
  return (
    <TodoProvider>
      <Header>To-Do List (Afazeres)</Header>
      <main className="container">
        <TodoForm />
        <TodoList />
      </main>
    </TodoProvider>
  );
}
