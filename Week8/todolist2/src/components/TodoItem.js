import React from "react";

const TodoItem = ({ todoItem, todoList, setTodoList }) => {
  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      // id 값이 같은 항목의 checked 값을 Toggle
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));

    setTodoList(nextTodoList);
  };

  const onClickDeleteButton = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      deleted: item.id === todoItem.id ? true : item.deleted,
    }));

    setTodoList(nextTodoList);
  };

  return (
    <li className="todoapp_item">
      <input
        type="checkbox"
        className="todoapp_item-checkbox"
        checked={todoItem.checked}
        onChange={onChangeCheckbox}
      />
      {
        // 아이템 내용
        <span
          className={`todoapp_item-ctx ${
            todoItem.checked ? "todoapp_item-ctx-checked" : ""
          }`}
        >
          {todoItem.text}
        </span>
      }

      <button
        type="button"
        className="todoapp_item-delete-btn"
        onClick={onClickDeleteButton}
      >
        ✘
      </button>
    </li>
  );
};

export default TodoItem;
