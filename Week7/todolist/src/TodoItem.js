const TodoItem = ({ onDelete, id, content, isDone, created_date }) => {
  return (
    <div className="TodoItem">
      <div className="content">
        {content}
        <button classname="check" onClick={() => {}}>
          ✔️
        </button>
        <button
          classname="delete"
          onClick={() => {
            onDelete(id);
          }}
        >
          ✖️
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
