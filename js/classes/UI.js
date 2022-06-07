export class UI {
    newTodo() { }
    /**
     * It creates a new div element, sets its class name to "container-todo", and sets its innerHTML to a
     * string of HTML that contains a label element with a class name of "form-control" and an input
     * element with a class name of "checkbox" and a type of "checkbox" and a name of "delete".
     *
     * The label element contains the text of the todo parameter.
     *
     * The div element is then appended to the listTodo element.
     * @param {string} todo - string - The todo item that will be added to the list.
     */
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
    /**
     * If the checkbox is checked, add the class 'completed' to the parent element of the checkbox. If the
     * checkbox is not checked, remove the class 'completed' from the parent element of the checkbox.
     * @param {HTMLInputElement} todo - HTMLInputElement
     */
    todoChecked(todo) {
        var _a, _b;
        if (todo.checked)
            (_a = todo.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add('completed');
        else
            (_b = todo.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove('completed');
    }
    showCompleted(todo) {
        todo.forEach(item => {
            if (!item.classList.contains('completed') &&
                !item.classList.contains('noCompleted')) {
                item.classList.remove('form-control');
                item.classList.add('noCompleted');
            }
            else {
                item.classList.remove('noCompleted');
                item.classList.add('form-control');
            }
        });
    }
    showActiveds(todo) {
        todo.forEach(item => {
            if (item.classList.contains('completed') &&
                !item.classList.contains('noActived')) {
                item.classList.remove('form-control');
                item.classList.add('noActived');
            }
            else {
                item.classList.add('form-control');
                item.classList.remove('noActived');
            }
        });
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
