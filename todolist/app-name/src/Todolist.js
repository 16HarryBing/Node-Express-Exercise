import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [todosCompleted, setTodosCompleted] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setTodosCompleted([...todosCompleted, false]);
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleTodoDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    const newTodosCompleted = todosCompleted.filter((_, i) => i !== index);
    setTodosCompleted(newTodosCompleted);
  };

  const handleCheckboxChange = (index) => {
    const newTodosCompleted = [...todosCompleted];
    newTodosCompleted[index] = !newTodosCompleted[index];
    setTodosCompleted(newTodosCompleted);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" onChange={() => handleCheckboxChange(index)} />
            <span style={{ textDecoration: todosCompleted[index] ? 'line-through' : 'none' }}>{todo}</span>
            <button onClick={() => handleTodoDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
