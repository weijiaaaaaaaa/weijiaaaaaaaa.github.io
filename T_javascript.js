// Running button
const myButton = document.querySelector('#my-button')

function randomPositionX () {
	let X = Math.floor(Math.random()* 300);
	
	return X + 'px'
}

function randomPositionY () {
	let Y = Math.floor(Math.random()* 300);

	return Y + 'px'
}

let counter = 0
myButton.onmouseover = function () {
	counter = counter +1 
	if (counter <= 10) {
	myButton.style.left = randomPositionX();
	myButton.style.top = randomPositionY();
	console.log('hello')
	}
}

// To do list
const toDo = document.querySelector('#myInput');
const addButton = document.querySelector('.add');
const listParent = document.querySelector('#myUl');
let newList = document.createElement('li');

addButton.onclick = function (){
	if (toDo.value == ''){
		alert('Write something!')
	}

	else {
		newList.innerHTML = newList.innerHTML +  '<li>' + toDo.value + '</li>'
		listParent.appendChild(newList)
		toDo.value = ''
	}
}