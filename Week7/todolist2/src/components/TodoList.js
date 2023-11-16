import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => (
  <div className="todoapp_list">
    <p className="todoapp_list-tit">제목</p>
    {/* 기능 구현 전, 임시로 아래와 같이 작성. 기능 개발시에는 map으로 컴포넌트 반환 */}
    <ul className="todoapp_list-ul">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  </div>
);

export default TodoList;
