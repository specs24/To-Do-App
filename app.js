function onReady() {
	const addToDoForm = document.getElementById('addToDoForm');
	const newToDoText = document.getElementById('newToDoText');
	const ToDoList = document.getElementById('ToDoList');
}

addToDoForm.addEventListener('submit',() =>{
	event.preventdefault();
	let title = newToDoText.value;
});
}


window.onload = function() {
	alert("The window has loaded");
	onReady();
};

	