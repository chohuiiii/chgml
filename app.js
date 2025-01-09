// let textElament = document.querySelector("#text")
// textElament.textContent = ("바뀐 글씨")

let btnElement = document.querySelector("#change")
btnElement.addEventListener("click", () => {

let textElement = document.querySelector("#text")
textElement.textContent = ("바뀐 글씨")

let inputElement = document.querySelector("#text-input");

let newList = document.createElement("li");
newList.textContent = inputElement.value;

localStorage.setItem('사용자 이름', '박초희')

let todoList = document.querySelector("#todo-list");
todoList.appendChild(newList);

inputElement.value = "";

onsole.log(inputElement.value);

let title = document.querySelector("#text");
textElement.textContent = (inputElement.value);



})