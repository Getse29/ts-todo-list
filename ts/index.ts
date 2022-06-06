/* imports */
import { Todo } from './classes/Todo.js';
import { UI } from './classes/UI.js';

/* Variables */
const ui = new UI();
const form: Element | null =
  document.querySelector('#form');
const listTodo = document.getElementById('list-todo');

/* events */
document.addEventListener('DOMContentLoaded', () => {
  form?.addEventListener('submit', formTodo);
  listTodo?.addEventListener('click', todoInput);
});

/* functions */
/* Sends new todos and reset Form */
const formTodo = (e: Event): void => {
  e.preventDefault();
  const todoValue = (
    document.getElementById('inputTodo') as HTMLInputElement
  ).value;

  if (todoValue === '') return;

  const todos = new Todo(todoValue);
  ui.addTodo(todos.todoText);
  ui.resetForm();
};

const todoInput = (e: Event) => {
  const todoTarget = e.target as HTMLInputElement;

  ui.todoChecked(todoTarget);
};
