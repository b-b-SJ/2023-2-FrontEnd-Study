import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../context/todoProvider";

const Item = (props) => {
  const { itemList } = useContext(TodoContext);
  const renderList = itemList.filter((item) => item.isDone === props.done);

  return (
    <ItemSection>
      <h2>{props.title}</h2>
      <ItemList done={props.done}>
        {renderList.map((item) => {
          return <TodoItem key={item.id} item={item} />;
        })}
      </ItemList>
    </ItemSection>
  );
};

const TodoItem = (props) => {
  const { todoDispatch } = useContext(TodoContext);

  return (
    <li>
      <span>{props.item.text}</span>
      <button
        onClick={() => todoDispatch({ type: "TOGGLE", value: props.item.id })}
      >
        ✓
      </button>
      <button
        onClick={() => todoDispatch({ type: "REMOVE", value: props.item.id })}
      >
        ✘
      </button>
    </li>
  );
};

const ItemSection = styled.section`
  overflow: auto;
  flex: 0.5;
`;

const ItemList = styled.ul`
  padding-left: 35px;
  margin-top: 10px;
  overflow: auto;
  color: ${(props) => (props.done === true ? "gray" : "black")};
  text-decoration: ${(props) =>
    props.done === true ? "line-through " : "none"};
`;

export default Item;
