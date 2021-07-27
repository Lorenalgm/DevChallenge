import React, { useState } from 'react';

import { HeaderImg, Container, ToDoDiv, AddToDo, Content } from './styled';
import DashboardDefault from '../../components/DashboardDefault';

function ToDoChallenge() {
  const [todos, setTodos] = useState([
    {
      id: 2,
      title: 'teste',
      checked: 1,
      subtodo: [{ id: 1, title: 'teste', checked: 1, subtodo: [] }],
    },
  ]);

  function renameTodo(todo, value) {
    return { ...todo, title: value };
  }

  function changeChecked(todo, value) {
    const newValue = value === '1' ? 0 : 1;
    console.log(newValue);
    return { ...todo, checked: newValue };
  }

  function createTodo(todo) {
    const newValue = { title: '', id: '', checked: 0, subtodo: [] };
    return { ...todo, newValue };
  }

  const modifiers = {
    rename: renameTodo,
    check: changeChecked,
    add: createTodo,
  };

  function findToDo(toDoList, id, modify, value) {
    const newTodoList = toDoList.map((todo) => {
      if (`${todo.id}` === id) {
        const todoItem = modifiers[modify](todo, value);
        return todoItem;
      }
      if (todo.subtodo.length !== 0) {
        const subtodos = findToDo(todo.subtodo, id, modify, value);
        return { ...todo, subtodo: subtodos };
      }
      return todo;
    });
    return newTodoList;
  }

  function toggleCheckedStatus(e, modify) {
    const { id, value } = e.target;
    const newTodoList = findToDo(todos, id, modify, value);
    setTodos(newTodoList);
    console.log(newTodoList);
  }

  function renderToDo(todo) {
    return (
      <>
        <ToDoDiv key={todo.id}>
          <input
            type="checkbox"
            id={todo.id}
            name={todo.title}
            defaultChecked={todo.checked === 1}
            onClick={(e) => toggleCheckedStatus(e, 'check')}
            value={todo.checked}
          />
          <label htmlFor={todo.id}>{todo.title}</label>
          <input
            id={todo.id}
            type="text"
            value={todo.title}
            onChange={(e) => toggleCheckedStatus(e, 'rename')}
          />

          {todo.subtodo.map((newTodo) => renderToDo(newTodo))}
        </ToDoDiv>
        {todo.subtodo.length === 0 && (
          <AddToDo id={todo.id} onClick={(e) => toggleCheckedStatus(e)}>
            + Add To-Do
          </AddToDo>
        )}
      </>
    );
  }

  return (
    <DashboardDefault>
      <HeaderImg img="https://i.imgur.com/sUMq8V2.png" />
      <Container>
        <h1>Titulo</h1>
        <Content>
          {todos.map((todo) => renderToDo(todo))}
          <AddToDo onClick={(e) => toggleCheckedStatus(e)}>+ Add To-Do</AddToDo>
        </Content>
      </Container>
    </DashboardDefault>
  );
}

export default ToDoChallenge;
