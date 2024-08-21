import { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState ("");
    const [category, setCategory] = useState ("");
    const [priority, setPriority] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category, priority);
        setValue("");
        setCategory("");
        setPriority("");
    }

  return <div className="todo-form">
    <h2>Criar Tarefa</h2>
    <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Digite o título" 
          value={value} 
          onChange={(e) => setValue(e.target.value)}
          />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
        </select>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Prioridade</option>
          <option value="Alta">Alta</option>
          <option value="Média">Média</option>
          <option value="Baixa">Baixa</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
    </form>
  </div>
}

export default TodoForm