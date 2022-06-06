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

  resetForm() {
    (
      document.getElementById('form') as HTMLFormElement
    ).reset();
  }

  deleteTodo(todo: HTMLInputElement) {
    if (todo.name === 'delete') {
      todo.parentElement?.remove();
    }
  }

  showMessage(message: string): void {
    console.log(`${message}`);
  }
}
