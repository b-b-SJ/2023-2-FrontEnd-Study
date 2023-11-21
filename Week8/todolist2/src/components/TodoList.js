import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ title, todoList, setTodoList, checkedList }) => (
  <div className="todoapp_list">
    {/* props로 부터 title 값을 전달 받음 */}
    <p className="todoapp_list-tit">{title}</p>

    <ul className="todoapp_list-ul">
      {todoList && // todoList가 있을때만 출력
        todoList.map((todoItem) => {
          // 삭제한 항목인 경우, 출력하지 않음
          if (todoItem.deleted) return null;

          // checkedList 값에 따라 '할 일 목록' 또는 '완료한 목록'을 출력
          if (checkedList !== todoItem.checked) return null;

          return (
            // map을 이용하여 ToDoItem을 출력
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          );
        })}
    </ul>
  </div>
);

export default TodoList;
