export class UI {
    newTodo() { }
    addTodo(todo) {
        const listTodo = document.getElementById('list-todo');
        const div = document.createElement('div');
        div.className = 'container-todo';
        div.innerHTML = /* HTML */ `
      <label id="labelTodo" class="form-control">
        <input
          class="checkbox"
          type="checkbox"
          name="delete"
        />
        ${todo}
      </label>
    `;
        listTodo === null || listTodo === void 0 ? void 0 : listTodo.appendChild(div);
    }
    todoChecked(todo) {
        var _a, _b;
        if (todo.checked)
            (_a = todo.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add('completed');
        else
            (_b = todo.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove('completed');
    }
    showCompleted(todo) {
        console.log(todo.checked);
    }
    showActiveds(todo) {
        console.log(todo.checked);
    }
    deleteTodo(todo) {
        var _a;
        if (todo.name === 'delete') {
            (_a = todo.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        }
    }
    resetForm() {
        document.getElementById('form').reset();
    }
    showMessage(message) {
        console.log(`${message}`);
    }
}
