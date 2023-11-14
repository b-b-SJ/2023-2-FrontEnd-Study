import { useRef, useState } from "react";

const TodoEditor = ({ onCreate }) => {
  const contentInput = useRef();

  const [state, setState] = useState({
    content: "",
    isDone: false,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.content.length < 1) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.content);
    setState({
      content: "",
      isDone: false,
    });
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <div className="Todotitle">My little - TodoList vol.2</div>
      <div>
        <input
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          onKeyDown={(e) => handleOnKeyPress(e)}
          placeholder="Anything todo?"
        />
        <button onClick={handleSubmit}>+</button>
      </div>
    </div>
  );
};

export default TodoEditor;
