/* imports */
import { Todo } from './classes/Todo.js';
import { UI } from './classes/UI.js';
/* Variables */
const ui = new UI();
const form = document.querySelector('#form');
const listTodo = document.getElementById('list-todo');
const showCompleted = document.getElementById('showCompleted');
/* events */
document.addEventListener('DOMContentLoaded', () => {
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', formTodo);
    listTodo === null || listTodo === void 0 ? void 0 : listTodo.addEventListener('click', todoInput);
    showCompleted === null || showCompleted === void 0 ? void 0 : showCompleted.addEventListener('click', showCompletedItems);
});
/* functions */
/* Sends new todos and reset Form */
const formTodo = (e) => {
    e.preventDefault();
    const todoValue = document.getElementById('inputTodo').value;
    if (todoValue === '')
        return;
    const todos = new Todo(todoValue);
    ui.addTodo(todos.todoText);
    ui.resetForm();
    3;
};
const todoInput = (e) => {
    const todoTarget = e.target;
    ui.todoChecked(todoTarget);
};
const showCompletedItems = (e) => {
    console.log(e);
    const todo = document.querySelectorAll('#labelTodo');
    ui.showCompleted(todo);
};
