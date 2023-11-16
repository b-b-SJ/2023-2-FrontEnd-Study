import React from "react";

const InputBox = () => (
  <div className="todoapp_inputbox">
    {/* 아이템 내용 입력 input */}
    <input
      type="text"
      name="todoItem"
      placeholder="Anything to-do?"
      className="todoapp_inputbox-inp"
    />
    {/* 입력 후 아이템 추가 버튼 */}
    <button type="submit" className="todoapp_inputbox-add-btn">
      추가
    </button>
  </div>
);

export default InputBox;
