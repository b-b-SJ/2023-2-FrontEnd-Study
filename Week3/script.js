let itemList = [];

const renderTodoItem = () => {
  const savedTodo = localStorage.getItem("itemList");
  const todoList = document.getElementById("todo-list");
  const doneList = document.getElementById("done-list");

  // 덮어쓰지 않도록 초기화
  todoList.innerHTML = "";
  doneList.innerHTML = "";

  // 데이터가 존재하는지 확인
  if (savedTodo) {
    itemList = JSON.parse(savedTodo);

    itemList.forEach((savedItem) => {
      const item = document.createElement("li");
      const itemText = document.createElement("span");

      // 목록 클릭 시 옮기기
      itemText.className = "item-text";
      itemText.addEventListener("click", toggleItem);
      itemText.innerText = savedItem.text;
    
      // 목록 지우기
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.addEventListener("click", removeItem);
      deleteButton.innerText = "✖️";

      item.appendChild(itemText);
      item.appendChild(deleteButton);

      // 완료되었는지 아닌지 확인해서 알맞는 List에 넣기
      if (!savedItem.isDone) {
        todoList.appendChild(item);
      } else {
        doneList.appendChild(item);
      }
    });
  }
};

// 새로운 할 일을 입력 받을 때 로컬 스토리지에 추가한다
const addTodoList = () => {
  event.preventDefault;
  const inputObject = {
    id: Date.now(),
    text: document.getElementById("todo-input").value,
    isDone: false, // todo 입력 당시, 아직 완료되지 않음
  };
  if (inputObject.text) {
    // 빈 입력은 받지 않음
    itemList = [...itemList, inputObject];
    localStorage.setItem("itemList", JSON.stringify(itemList)); // 로컬 스토리지에 저장
    renderTodoItem();
  }
};

// isDone의 상태를 반대로 바꿔 준다
const toggleItem = (e) => {
  const itemObject = itemList.find(
    (inputObject) => inputObject.text === e.target.innerText
  );
  itemObject.isDone = !itemObject.isDone;
  localStorage.setItem("itemList", JSON.stringify(itemList)); // 로컬 스토리지 갱신
  renderTodoItem();
};

// 로컬 스토리지에서 값을 삭제한다
const removeItem = (e) => {
  const filteredList = itemList.filter(
    (inputObject) =>
      inputObject.text !== e.target.parentNode.innerText.slice(0, -2)
  );
  localStorage.setItem("itemList", JSON.stringify(filteredList)); // 로컬 스토리지 갱신
  renderTodoItem();
};

window.onload = renderTodoItem();
