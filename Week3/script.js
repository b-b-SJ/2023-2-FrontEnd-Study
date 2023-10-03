const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDos = document.querySelector(".todo-list");
const Dones = document.querySelector(".done-list");

const TODOLIST = "toDoList";
const DONELIST = "doneList";
let toDoList = [];
let doneList = [];

function delToDo(event){
    const button = event.target ;
    const li = button.parentNode;
    toDos.removeChild(li);
  }

function saveToDo(toDo) {
  const toDoObj = {
    text: toDo,
    id: toDoList.length + 1,
  };
  toDoList.push(toDoObj);
  localStorage.setItem(TODOLIST, JSON.stringify(toDoList));
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const FinBut = document.createElement("button");
  const delBut = document.createElement("button"); //삭제버튼

  FinBut.innerHTML="✔️";
  FinBut.addEventListener("click", FinToDo);
  delBut.innerText = "❌";
  delBut.addEventListener("click", delToDo);
  span.innerHTML = toDo;
  li.appendChild(span);
  li.appendChild(FinBut);
  li.appendChild(delBut);
  li.id=toDoList.length+1;
  toDos.appendChild(li);
}

function createToDo(event) {
  event.preventDefault();
  const toDo = toDoInput.value;
  paintToDo(toDo);
  saveToDo(toDo);
  toDoInput.value = "";
}

function FinToDo(event){
    const button = event.target ;
    const li = button.parentNode;
    doneList.push(li);
  }

function loadToDoList() {
  const loadedToDoList = localStorage.getItem(TODOLIST);
  if (loadedToDoList !== null) { //todo list가 존재할 때
    const parsedToDoList = JSON.parse(loadedToDoList);
    for (let toDo of parsedToDoList) {
      const { text } = toDo;
      paintToDo(text);
      saveToDo(text);
    }
  }
}

function init() {
  loadToDoList();
  toDoForm.addEventListener("submit", createToDo);
}
init();