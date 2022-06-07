/* imports */
import { Todo } from './classes/Todo.js';
import { UI } from './classes/UI.js';

/* Variables */
const ui = new UI();

const form: Element | null =
  document.querySelector('#form');
const listTodo = document.getElementById('list-todo');
const showCompleted =
  document.getElementById('showCompleted');

/* events */
document.addEventListener('DOMContentLoaded', () => {
  form?.addEventListener('submit', formTodo);
  listTodo?.addEventListener('click', todoInput);
  showCompleted?.addEventListener(
    'click',
    showCompletedItems
  );
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
  3;
};

const todoInput = (e: Event) => {
  const todoTarget = e.target as HTMLInputElement;

  ui.todoChecked(todoTarget);
};

const showCompletedItems = (e: Event) => {
  console.log(e);

  const todo = document.querySelectorAll('#labelTodo');

  ui.showCompleted(todo);
};
