export class UI {
  public newTodo() {}

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

  todoChecked(todo: HTMLInputElement): void {
    if (todo.checked)
      todo.parentElement?.classList.add('completed');
    else todo.parentElement?.classList.remove('completed');
  }

  showCompleted(todo: HTMLInputElement): void {
    console.log(todo.checked);
  }

  showActiveds(todo: HTMLInputElement) {
    console.log(todo.checked);
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
