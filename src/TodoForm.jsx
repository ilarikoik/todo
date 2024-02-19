// TodoForm.jsx
import React from 'react';

export default function TodoForm({ changeValue, handleClick}) {
  
  return (
    <div>
      <h3>Add Todo</h3>
      <input
        type="text"
        placeholder="Time"
        name="time"
        onChange={changeValue}
        value={info.time}
      />
      <input
        type="text"
        placeholder="Todo"
        name="todo"
        onChange={changeValue}
        value={info.todo}
      />
      <button onClick={handleClick}>lisää</button> {/* Change the button text */}
    </div>
  );
}
