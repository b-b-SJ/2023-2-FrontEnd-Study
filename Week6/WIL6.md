Setcion 5. 간단한 일기장 프로젝트
강의를 들으며 프로젝트를 따라 진행해보았다. 아직 어설픈 부분이 많아서 다시 돌려보면서 이해하는 과정을 거쳐야 할 듯.

시작 전 Point

1. 사용자 입력 및 배열 리스트 처리하기
2. React Lifecycle과 API
3. React App 프로처럼 성능 최적화하기 with 도구 사용
4. React 컴포넌트 트리에 전역 데이터 공급하기

새로운 리액트 프로젝트를 생성, npm start로 run

- 1. 다양한 사용자 입력 처리하기
     : 1. 한 줄 입력 처리하기 2. 여러 줄 입력 처리하기 3. 선택 박스 입력 처리하기 4. 사용자 입력 데이터 핸들링하기

사용자의 입력을 React에서 처리하려면 state 사용
import {useState} from "react"; 형태로 임포트,
const [author, setAuthor] = useState(""); 등의 형태로 선언

스프레드 연산자 ...
handleChangeState로 onChange 이벤트들 관리

- 2. React에서 DOM 조작하기
     : 일기 저장 버튼을 눌렀을 때 작성자와 일기가 정상적으로 입력 되었는지 확인, 아니라면 focus하기

handleSubmit 함수를 수정
작성자와 일기가 각각 입력 글자 수를 만족하는지 확인한 후 alert를 띄우고, 해당 함수를 다시 return 하는 것이 원형

const handleSubmit = () => {
if (state.authour.length < 1> {
alert ("작성자는 최소 1글자 이상 입력하세요.")
// focus
return;
})
}

원형에서 alert를 띄우는 부분을 focus 기능으로 대체하기.
어떤 DOM 요소에 focus를 줄지 선택하는 기능 = React의 useRef

- 3. React에서 리스트 렌더링 하기
     : 배열을 이용하여 React에서 LIST를 렌더링 해보고 개별적인 컴포넌트로 만들어보기

일기 리스트를 렌더링할 컴포넌트를 새로 만들기

+) 행 복사 붙여넣기 단축키는 Shift+Alt+아래 화살표 / Shift+ 화살표로 선택 가능~

DefalutProps : Undefined로 전달될 것 같은 props들의 기본값을 설정할 수 있는 기능.
prop을 0으로 지정해서 에러 없이 빈 배열을 제대로 전달할 수 있게 하기

리스트에 있는 각각의 자식 요소들은 각각 반드시 고유한 key props를 받아야 함.
-> 자식 아이템의 최상위 태그에 아이디를 설정해서 해결하기.
혹은, map 내장함수 콜백함수에 두 번째 파라미터인 인덱스를 사용해서 해결하기. 하지만 배열의 인덱스를 사용하면 키로 데이터를 수정, 삭제, 추가해서 인덱스들의 순서가 바뀔 때 리액트에서 문제가 생길 수 있음. 따라서 고유한 아이디로 키를 지정하는 것을 지향

보기 좋게 CSS 설정하기

- 4. React에서 리스트 데이터 추가하기
     : 배열을 이용한 React의 List에 아이템을 동적으로 추가해보기

컴포넌트 트리를 그려 컴포넌트&데이터 구조 생각해보기
React의 반방향 데이터 흐름 : React는 단방향으로만 (위에서 아래로만) 데이터가 흐름
같은 자식들끼리, 즉 DiaryList에서 작성한 일기를 DiaryEditor에 추가해주어야 할 때는 어떻게 할까?
-> 요소를 공통 부모인 App 컴포넌트로 끌어올려서 해결하기.
App 컴포넌트는 일기 데이터를 배열 형식의 스테이트로 가지고 있고, 이 데이터 스테이트의 값을 DiaryList에게 전달하여 리스트를 렌더링하게 하기. 이 데이터라는 스테이트를 변화시킬 수 있는 사태 변화함수인 setData를 DiaryEditor 컴포넌트에게 Prop으로 전달하기
-> 시뮬레이션 : DiaryEditor 컴포넌트에서 새로운 일기가 작성하면 setData 함수가 호출되고, data 값이 바뀌며 데이터 추가가 일어남. 데이터 스테이트가 변경되었으니 DiaryList 컴포넌트에게 전달하는 prop인 새로운 데이터가 전달되고, 리렌더링이 됨.

: 결론적으로, 리액트로 만든 컴포넌트들은 트리 형태의 구조를 띄며, 데이터는 위에서 아래로만 움직이게 되는 단방향 흐름이 되고 수정, 추가 등의 이벤트들은 핸들링하는 함수를 prop으로 전달해서 아래에서 위로 올라가는 형태를 띔

- 5. React에서 리스트 데이터 삭제하기
     : 버튼을 누르면 해당 데이터를 뺀 배열로 업데이트 되게 하기.
