import TodoItem from "./TodoItem";

const TodoList = ({ onDelete, todoList }) => {
  return (
    <div className="List">
      <div className="Todolist">
        <h2>📂Todo</h2>
        <div>
          {todoList.map((it) => (
            <TodoItem key={it.id} {...it} onDelete={onDelete} />
          ))}
        </div>
      </div>
      <div className="Donelist">
        <h2>🗑Done</h2>
        <div></div>
      </div>
    </div>
  );
};

TodoList.defaultProps = {
  diaryList: [],
};

export default TodoList;
