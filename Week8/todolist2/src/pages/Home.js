import React, { useState } from "react";
import InputBox from "../components/InputBox";
import TodoList from "../components/TodoList";

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="homepage_container">
      <div className="Title">My little To-do list vol.3</div>
      {/* ToDo Item을 추가할 수 있는 input 박스 */}
      <InputBox todoList={todoList} setTodoList={setTodoList} />
      {/* 할 일 Item 리스트 */}
      <TodoList
        title={"할 일"}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false} // (체크되지 않은) 할 일 목록
      />

      {/* 완료한 Item 리스트 */}
      <TodoList
        title={"완료"}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true} // (체크되어 있는)완료한 목록
      />
    </div>
  );
};

export default Home;
