import React, { useRef, useState } from "react";

const InputBox = ({ todoList, setTodoList }) => {
  const [text, setText] = useState("");
  const inputRef = useRef();

  // input 값 가져오기
  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const dataId = useRef(0);

  const onPressSubmitButton = (e) => {
    e.preventDefault();

    // todoItemList에 값 추가
    const nextTodoList = todoList.concat({
      id: dataId.current,
      text,
      checked: false,
      deleted: false,
    });
    if (text === "") {
      alert("할 일을 입력하세요!");
      inputRef.current.focus();
    } else {
      localStorage.setItem("todoList", JSON.stringify(nextTodoList));
      setTodoList(nextTodoList);
      dataId.current += 1;

      // input 값 초기화 및 포커싱
      setText("");
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={onPressSubmitButton} className="todoapp_inputbox">
      {/* 아이템 내용 입력 input */}
      <input
        type="text"
        name="todoItem"
        value={text}
        ref={inputRef}
        placeholder="Anything to-do?"
        className="todoapp_inputbox-inp"
        onChange={onChangeInput}
      />
      {/* 입력 후 아이템 추가 버튼 */}
      <button type="submit" className="todoapp_inputbox-add-btn">
        추가
      </button>
    </form>
  );
};

export default InputBox;
