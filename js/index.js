/* imports */
import { Todo } from './classes/Todo.js';
import { UI } from './classes/UI.js';
/* Variables */
const ui = new UI();
let isActived = true;
const form = document.querySelector('#form');
const listTodo = document.getElementById('list-todo');
const showCompleted = document.getElementById('showCompleted');
const showActived = document.getElementById('showActived');
/* events */
document.addEventListener('DOMContentLoaded', () => {
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', formTodo);
    listTodo === null || listTodo === void 0 ? void 0 : listTodo.addEventListener('click', todoInput);
    showCompleted === null || showCompleted === void 0 ? void 0 : showCompleted.addEventListener('click', showCompletedItems);
    showActived === null || showActived === void 0 ? void 0 : showActived.addEventListener('click', showActivedItems);
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
    const todo = document.querySelectorAll('#labelTodo');
    ui.showCompleted(todo);
};
const showActivedItems = (e) => {
    const todo = document.querySelectorAll('#labelTodo');
    const inputTodo = document.getElementById('inputTodo');
    ui.showActiveds(todo);
    if (isActived) {
        inputTodo.disabled = true;
        isActived = false;
        return;
    }
    isActived = true;
    inputTodo.removeAttribute('disabled');
};
/*  */
