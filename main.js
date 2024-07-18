const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="li-div">
            <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
            <button class="status-btn" onclick="toggleStatus(${index})">${todo.completed ? 'Tekshirilmagan' : 'Tekshirilgan'}</button>
        </div>
            `;
        todoList.appendChild(li);
    });
}

function addTodo(event) {
    event.preventDefault();
    const text = todoInput.value.trim();
    if (text !== '') {
        todos.push({ text: text, completed: false });
        todoInput.value = '';
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function toggleStatus(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

todoForm.addEventListener('submit', addTodo);

renderTodos();