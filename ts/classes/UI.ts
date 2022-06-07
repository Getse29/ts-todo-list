export class UI {
  public newTodo() {}

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
  addTodo(todo: string): void {
    const listTodo: HTMLElement | null =
      document.getElementById('list-todo');
    const div: HTMLDivElement =
      document.createElement('div');
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

    listTodo?.appendChild(div);
  }

  /**
   * If the checkbox is checked, add the class 'completed' to the parent element of the checkbox. If the
   * checkbox is not checked, remove the class 'completed' from the parent element of the checkbox.
   * @param {HTMLInputElement} todo - HTMLInputElement
   */

  todoChecked(todo: HTMLInputElement): void {
    if (todo.checked)
      todo.parentElement?.classList.add('completed');
    else todo.parentElement?.classList.remove('completed');
  }

  showCompleted(todo: NodeListOf<Element>): void {
    todo.forEach(item => {
      if (
        !item.classList.contains('completed') &&
        !item.classList.contains('noCompleted')
      ) {
        item.classList.remove('form-control');
        item.classList.add('noCompleted');
      } else {
        item.classList.remove('noCompleted');
        item.classList.add('form-control');
      }
    });
  }

  showActiveds(todo: NodeListOf<Element>) {
    todo.forEach(item => {
      if (
        item.classList.contains('completed') &&
        !item.classList.contains('noActived')
      ) {
        item.classList.remove('form-control');
        item.classList.add('noActived');
      } else {
        item.classList.add('form-control');
        item.classList.remove('noActived');
      }
    });
  }

  deleteTodo(todo: HTMLInputElement): void {
    if (todo.name === 'delete') {
      todo.parentElement?.remove();
    }
  }

  resetForm() {
    (
      document.getElementById('form') as HTMLFormElement
    ).reset();
  }

  showMessage(message: string): void {
    console.log(`${message}`);
  }
}
