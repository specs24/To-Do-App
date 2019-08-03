function onReady() {
	const addToDoForm = document.getElementById('addToDoForm');
	const newToDoText = document.getElementById('newToDoText');
	const ToDoList = document.getElementById('ToDoList');
}

addToDoForm.addEventListener('submit',function(event) {
	event.preventDefault();
	let title = newToDoText.value;
	
	let newLi = document.createElement('li');
	let checkbox = document.createElement('input');
	checkbox.type = "checkbox";
					
	let deleteButton = document.createElement('button');
	deleteButton.textContent = 'Delete';

	deleteButton.addEventListener('click',function(event){
		this.parentElement
		toDoList.removeChild(this.parentElement);
	})
   

	newLi.textContent = title;
	newLi.appendChild(checkbox);
	newLi.appendChild(deleteButton);
	
	toDoList.appendChild(newLi);
	
	newToDoText.value = '';
});

window.onload = function() {
	alert("The window has loaded");
	onReady();
};
