import { html, LitElement } from 'lit';
import './components/todo-list.js';

const author = 'Adrian';
const homepage = 'http://elyin.github.io';
const footerTemplate = html`
<footer>Created by ${author} - ${homepage}</footer>
`;

class TodoApp extends LitElement {
    static properties = {
        todos: { type: Array }
    };
    constructor() {
        super();
        this.todos = [
            { text: 'Do A', finished: true },
            { text: 'Do B', finished: false },
            { text: 'Do C', finished: false }];
    }


    render() {
        return html`
        <h1>Todo app</h1>

        <input id="addTodoInput" placeholder="name" />
        <button @click="${this._addTodo}">Add</button>
        <todo-list
        .todos="${this.todos}"
         @change-todo-finished="${this._changeTodoFinished}"
         @remove-todo="${this._removeTodo}"
        ></todo-list>
                <div>
                    Total finished: ${this.todos.filter(t => t.finished).length} <br />
                    Total unfinished: ${this.todos.filter(t => !t.finished).length}
                </div>

    ${footerTemplate} `;
    }

    _addTodo() {
        const input = this.shadowRoot.getElementById('addTodoInput');
        const text = input.value;
        input.value = '';

        this.todos.push({ text, finished: false });
        this.requestUpdate();
    }

    _removeTodo(e) {
        const { detail: removedTodo } = e;
        this.todos = this.todos.filter(todo => todo !== removedTodo);
    }

    _changeTodoFinished(e) {
        const { changedTodo, finished } = e.detail;

        this.todos = this.todos.map((todo) => {
            if (todo !== changedTodo) {
                return todo;
            }
            return { ...changedTodo, finished };
        });
    }
}

customElements.define('todo-app', TodoApp);