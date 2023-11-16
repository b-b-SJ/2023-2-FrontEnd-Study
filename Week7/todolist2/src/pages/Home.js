import React from "react";
import InputBox from "../components/InputBox";
import TodoList from "../components/TodoList";

const Home = () => (
  <div className="homepage_container">
    <div className="Title">My little To-do list vol.3</div>
    {/* ToDo Item을 추가하는 input 박스 */}
    <InputBox />

    {/* 할 일 Item 리스트 */}
    <TodoList />

    {/* 완료한 Item 리스트 */}
    <TodoList />
  </div>
);

export default Home;
