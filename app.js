function onReady() {
	const addToDoForm = document.getElementById('addToDoForm');
		
	let toDos = [];

	function renderTheUI(){
		const toDoList = document.getElementById('toDoList');
		
		toDos.forEach(function(toDo){
			const newLi = document.createElement('li');
			const checkbox = document.createElement('input');
			checkbox.type = "checkbox";

			newLi.textContent = toDo.title;
			newLi.appendChild(checkbox);

			toDoList.appendChild(newLi);
		})
	
}
	
	function createNewToDo() {
		const newToDoText = document.getElementById('newToDoText');
		toDos.push({
			title: newToDoText.value,
			complete: false
		});	
	newToDoText.value = '';
	renderTheUI();
	}

	addToDoForm.addEventListener('submit', event=>{
		event.preventDefault();
		createNewToDo();
	});

	renderTheUI();
}
	

window.onload = function() {
	onready();
};

	
   		
