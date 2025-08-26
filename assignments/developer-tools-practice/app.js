const addBtn = document.querySelector('#add-btn');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

fetchTodos().then((res) => {
    console.log('todos', res);
    renderTodos(res);
});

function fetchTodos() {
    return axios
        .get('https://api.vschool.io/marcus/todo')
        .then((response) => response.data);
}

function saveTodo(todo) {
    localStorage.setItem('todos', todo);
}

addBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (!task) return;

    const newTodo = {
        title: task,
        completed: false
    };

    axios
        .post('https://api.vschool.io/marcus/todo', newTodo)
        .then((response) => {
            console.log('Created:', response.data);

            return fetchTodos();
        })
        .then((allTodos) => {
            console.log('All Todos:', allTodos);
            todoList.innerHTML = '';
            renderTodos(allTodos);
        })
        .catch((err) => {
            console.error('Error:', err);
        });
});

function renderTodos(todos) {
    for (let i = 0; i < todos.length; i++) {
        let li = document.createElement('li');
        li.textContent = todos[i].title;
        todoList.appendChild(li);
    }
}
