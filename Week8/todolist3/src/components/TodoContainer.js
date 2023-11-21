import styled from "styled-components";
import InputBox from "./InputBox";
import Item from "./Item";

const TodoContainer = () => {
  return (
    <Container>
      <h1>To-do List vol.4</h1>
      <h3>~ ㅜ.ㅜ ~</h3>
      <InputBox />
      <Item title="📂 할 일 =======================" done={false} />
      <Item title="✔️ 완 료 =======================" done={true} />
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  height: 43rem;
  background: rgba(255, 255, 255);
  border-radius: 10px;
  display: flex;
  flex-direction: column; // 세로정렬
`;

export default TodoContainer;
