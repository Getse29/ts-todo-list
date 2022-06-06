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
    resetForm() {
        document.getElementById('form').reset();
    }
    deleteTodo(todo) {
        var _a;
        if (todo.name === 'delete') {
            (_a = todo.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        }
    }
    showMessage(message) {
        console.log(`${message}`);
    }
}
