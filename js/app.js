let input = document.querySelector('.input');
let button = document.querySelector('.button');
let todo = document.querySelector('.todoList');

let todoList = [];

if (localStorage.getItem('TodoList')) {
	todoList = JSON.parse(localStorage.getItem('TodoList'));
	displayTodo();
};

input.addEventListener('keyup', () => {
	let inputValue = input.value;

	if (inputValue.trim() != 0) {
		button.classList.add('active');
	} else {
		button.classList.remove('active');
	}
});

button.addEventListener('click', () => {
	let objTodo = {
		todo: input.value
	}

	todoList.push(objTodo);
	displayTodo();
	localStorage.setItem('TodoList', JSON.stringify(todoList));
});

function displayTodo () {

	let display = '';

	todoList.map((element) => display += `
		<li class="todoList_item">
			<span><i class="fas fa-check"></i></span>${element.todo}
			<span><i class="fas fa-trash"></i></span>
		</li>
		`).join();
	todo.innerHTML = display;

	input.value = '';
	button.classList.remove('active');
};

todo.addEventListener('click', (e) => {
	if (e.target.className == 'fas fa-trash') {
		function deleteTodo (index) {
			todoList = JSON.parse(localStorage.getItem('TodoList'));
			todoList.splice(index, 1);
			localStorage.setItem('TodoList', JSON.stringify(todoList));
			displayTodo();
		};

		deleteTodo();
	};
});