import { useState, useEffect } from 'react';

import Todo from './components/Todo';
import { TodoForm } from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import Counter from './components/Counter';

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const isLocalStorageAvailable = () => {
    try {
      const test = "__test__";
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    if (isLocalStorageAvailable()) {
      const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    if (isLocalStorageAvailable()) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (text, category, priority) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        priority,
        isCompleted: false,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="app">
      <Counter />
      <h1>Minhas Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) => filter === "All"
            ? true
            : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => {
            const priorityOrder = { "Alta": 1, "Média": 2, "Baixa": 3 };
            if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
              return sort === "Asc"
                ? priorityOrder[a.priority] - priorityOrder[b.priority]
                : priorityOrder[b.priority] - priorityOrder[a.priority];
            }
            return sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text);
          })
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
