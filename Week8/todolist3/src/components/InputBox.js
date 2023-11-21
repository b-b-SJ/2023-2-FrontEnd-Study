import styled from "styled-components";
import useInput from "../hooks/useInput";
import { TodoContext } from "../context/todoProvider";
import { useContext } from "react";

const Input = () => {
  const todo = useInput();
  const { todoDispatch } = useContext(TodoContext);

  const todoData = {
    id: new Date(),
    text: todo.value,
    isDone: false,
  };

  const handleInputButtonClick = () => {
    if (todoData.text.trim()) {
      todoDispatch({ type: "TODO", value: todoData });
      todo.setValue("");
    } else {
      alert("할 일을 입력하세요!");
    }
  };

  return (
    <>
      <InputForm onSubmit={(e) => e.preventDefault()}>
        <InputText {...todo} placeholder=" Anything to-do?" />
        <InputButton onClick={handleInputButtonClick}>+</InputButton>
      </InputForm>
    </>
  );
};

const InputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: white;
`;

const InputText = styled.input`
  width: 80%;
  height: 30px;
  font-size: 14px;
  border-radius: 10px;
  outline: none;
  background: rgba(230, 230, 230);
  font-family: "PyeongChang-Bold";
`;

const InputButton = styled.button`
  margin-left: 5px;
  border-radius: 10px;
  background: none;
  font-size: 25px;
  cursor: pointer;
`;

export default Input;
