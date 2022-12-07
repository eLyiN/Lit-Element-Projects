import { LitElement, html, css } from 'lit-element';

class TodoList extends LitElement {
  static properties = {
    todos: { type: Array },
  };

  static styles = css`
        :host {
          color: blue;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        button {
          background: none;
          border: none;
          color: red;
          cursor: pointer;
        }
    `;

  render() {
    if (!this.todos) {
      return html``;
    }

    return html`
        <ol>
          ${this.todos.map(
      todo => html`
              <li>
                <input
                  type="checkbox"
                  .checked=${todo.finished}
                  @change=${e => this._changeTodoFinished(e, todo)}
                />
                ${todo.text}
                <button @click=${() => this._removeTodo(todo)}>X</button>
              </li>
            `,
    )}
        </ol>
      `;
  }
  _changeTodoFinished(e, changedTodo) {
    const eventDetails = { changedTodo, finished: e.target.checked };
    this.dispatchEvent(new CustomEvent('change-todo-finished', { detail: eventDetails }));
  }

  _removeTodo(item) {
    this.dispatchEvent(new CustomEvent('remove-todo', { detail: item }));
  }
}

customElements.define('todo-list', TodoList);