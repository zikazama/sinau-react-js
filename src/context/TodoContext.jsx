import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(['ini catatan']);

  return (
    <TodoContext.Provider value={{ todos }}>
      {children}
    </TodoContext.Provider>
  );
};