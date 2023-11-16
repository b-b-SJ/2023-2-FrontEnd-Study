import React from "react";

const TodoItem = () => (
  <li className="todoapp_item">
    {/* 완료 체크를 위한 체크박스 */}
    <input type="checkbox" className="todoapp_item-checkbox" />
    {/* 아이템 내용 */}
    <span className="todoapp_item-ctx">ToDo Item</span>
    {/* 수정 버튼 */}
    <button type="button" className="todoapp_item-edit-btn">
      ✏
    </button>
    {/* 삭제 버튼 */}
    <button type="button" className="todoapp_item-delete-btn">
      🗑
    </button>
  </li>
);

export default TodoItem;
