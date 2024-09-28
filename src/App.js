import React, { useState } from 'react';
import './App.css';
import Container from './Container'; 

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTodo = { id: Date.now(), text: inputValue, completed: false };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed; // Toggle completion
    setTodos(updatedTodos);
  };

  return (
    <Container>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTodo}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Add a new task" 
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#e6beae' : 'inherit',
            }}
          >
            {todo.text}
            <button
              onClick={() => handleComplete(todos.indexOf(todo))}
              style={{
                backgroundColor: todo.completed ? '#b2967d' : 'inherit',
                color: todo.completed ? 'white' : 'inherit',
              }}
            >
              {todo.completed ? '✓' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default App;