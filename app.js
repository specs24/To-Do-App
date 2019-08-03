function on ready() {
	let toDos = [];	
	const addToDoForm = document.getElementById('addToDoForm');

	function renderTheUI() {
		const toDoList = document.getElementById('toDoList');

		toDos.forEach(function(toDo) {
			const newLi = document.createElement('li');
			const checkbox = document.createElement('input');
			checkbox.type = "checkbox";

			newLi.textContent = toDo.title;
			newLi.appendChild(checkbox);
			toDoList.appendChild(newLi);
			
			newToDoText.value = '';

		});
	}

	function createNewToDo(){
		const newToDoText = document.getElementById('newToDoText');
		toDos.push({
			title: newToDoText.value,
			complete: false
		});
	
		newToDoText.value = '';
		renderTheUI();
	}

	addToDoForm.addEventListener('submit',event => {
		event.preventdefault();
		createNewToDo();
	});

	renderTheUI();
}

window.onload = function() {
	onready();
};

	
   		
