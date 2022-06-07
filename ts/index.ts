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
const showActived = document.getElementById('showActived');
const buttonActived = document.getElementById(
  'showActived'
) as HTMLButtonElement;

/* events */
document.addEventListener('DOMContentLoaded', () => {
  form?.addEventListener('submit', formTodo);
  listTodo?.addEventListener('click', todoInput);
  showCompleted?.addEventListener(
    'click',
    showCompletedItems
  );
  showActived?.addEventListener('click', showActivedItems);
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
  const todo = document.querySelectorAll('#labelTodo');
  ui.showCompleted(todo);
};

const showActivedItems = (e: Event) => {
  const todo = document.querySelectorAll('#labelTodo');

  if ((buttonActived.disabled = false)) {
    buttonActived.disabled = true;
    ui.showActiveds(todo);
    console.log('true');
    return;
  }
  console.log('false');
  buttonActived.disabled = false;
  ui.showActiveds(todo);
};
