import { useRef, useState } from "react";
import "./App.css";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

function App() {
  const [data, setData] = useState([]);

  const [isDone, setisDone] = useState(false);
  const toggle = () => setisDone(!isDone);

  const dataId = useRef(0);

  const onCreate = (content) => {
    const created_date = new Date().getTime();
    const newItem = {
      content,
      isDone,
      created_date,
      id: dataId.current,
    };

    dataId.current += 1;
    setData([...data, newItem]);
  };

  const onDelete = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <TodoEditor onCreate={onCreate} />
      <TodoList todoList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
