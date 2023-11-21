과제 예시 화면 및 구글링, 유튜브 강의 영상 등을 통해 다양한 사람들의 코드를 읽고 참고했다...
정말 다양한 형태와 방법으로 TodoList를 구성할 수 있다는 점을 다시금 느꼈다.
우선 이전과 다르게 컴포넌트들을 파일에 나누어 배치했다.
App.js에서는 Home.js를 렌더링했다.
Home.js에서는 제목, 입력창, 할 일 목록, 완료 목록으로 구성했다.
InputBox.js에서 입력창을,
TodoItem.js에서 각 아이템을 (체크박스, 내용, 삭제버튼),
TodoList.js에서 TodoItem을 포함해 리스트 형태로 구현하기로 구성했다.

1. Item 추가 기능
   useState()를 사용해 inpu에 입력한 값을 가져온다.
   추가 버튼 혹은 엔터를 눌러 event가 전달 되었을 때 입력된 값을 지우고 초기 상태로 돌아가게 한다.

   Home.js에 todolist를 생성해 입력한 item을 담을 수 있게 한다. 이후 InputBox에 기능을 추가한다. 부모 컴퍼넌트에서 props로 todoList, setTodolist를 받아온다. input에 입력한 값을 setTodolist()를 이ㅣ용, todoList에 추가한다. (concat 함수는 인자로 받은 값을 배열에 추가해 새로운 배열을 반환)
   각 todoItem 마다 id라는 식별자를 넣는다.
   pro-type을 이용해 props의 타입을 강제한다. todoList는 배열, todoList의 원소는 객체, id는 숫자, text는 문자열, setTodoList는 함수여야함.

2. 조회
   TodoItemList에 props 들을 넘긴다 : todoLsit, setTodolist, title. map을 이용하여 TodoItem을 출력한다.
   TodoItem에서는 부모 컴퍼넌트로부터 전달받은 todoItem.text를 출력한다.

   +)className을 세부적으로 나누니 css로 화면을 구성할 때 좀 더 다채롭게 구성할 수 있음을 알 수 있었다.

3. 할 일을 완료 상태로 바꾸는 기능
   checkbox와 checked 플래그 값을 연결하기.
   toggle 기능을 만들어서 버튼에 연결, 누르면 checked 상태가 true가 되어 완료 상태, 다시 누르면 false가 되어 다시 할 일 상태로 돌아가게 만들기
   checkedList로 TodoItemList 컴포넌트에서 할 일 / 완료 중 어떤 목록을 보일 건지 설정하기

4. 삭제 기능
   checked처럼 deleted 플래그 값을 기존 state에 추가해 화면에 보이지 않게 null을 반환하는 형식...
   실제로 지우는 것은 아니고 화면에 보이지 않게 하는 것 뿐이라 나중에 코드가 꼬일 수도 있을 것 같다.

[warning]Nested block is redundant no-lone-blocks
: 작동은 정상적으로 되지만 노랗게 문법 경고가 뜬다
괄호가 중첩되어 있다는 뜻, 풀어주면 사라진다.

(Week7에 완성하지 못했던 것을 조금 보완한 것이 todolist2,
Week8 과제 중 localStorage 구현을 하다가 다시 작성한 것이 todolist3)

- Week8 추가 사항
  Custom hook을 추가, Json 파일에 Todo 데이터 미리 저장해 두고 불러오기, localStorage에 데이터를 저장해 새로고침 해도 데이터가 날아가지 않게 하기

Custom hook : 개발자가 직접 만든 hook. 반복되는 로직을 묶어 하나의 컴포넌트로 만들 듯이 반복되는 메서드를 하나로 묶어서 사용. 보통 input이나 fetch 관리할 때 자주 쓰이며, 해당 과제에서는 useInput hook을 커스텀 함.
커스텀 훅을 사용하면 코드가 로직이 간결해지고, 반복이 줄어들며 유지보수에 용이해진다. 커스텀 훅의 이름은 use로 시작하기.

(custom hook에 대해 이해하기 위해 읽어본 자료 중 도움이 되었던 글
Custom hook을 만들기 전에 고려해야 할 것들 :
https://leego.tistory.com/entry/React-Custom-hook%EC%9D%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%A0%84%EC%97%90-%EA%B3%A0%EB%A0%A4%ED%95%B4%EC%95%BC-%ED%95%A0-%EA%B2%83%EB%93%A4
나중에 다시 참고하려고 링크를 남겨둔다.)

Web Storage API : 브라우저에서 키/값 쌍을 쿠키보다 훨씬 직관적으로 저장할 수 있는 방법을 제공. sessionStorage (출처에 대해 독립적인 저장 공간을 페이지 세션이 유지되는 동안 제공), localStorage(유효기간 없이 데이터를 저장. JS를 사용하거나 브라우저 캐시 또는 로컬 저장 데이터를 지워야만 사라짐)
localStorage 사용해서 새로고침을 해도 컴퓨터를 재시작해도 데이터 값들이 날아가지 않게 할 수 있음.
localStorage.setItem("key", value) 형식으로 값 저장 가능
객체를 저장할 때는 JSON.Stringfy를 사용해 직렬화, 문자열 형태로 객체를 압축해서 저장할 수 있음.
localStorage.getItem으로 데이터를 가져올 수 있음.

- 기본적으로 로컬스토리지에 들어가는 값들은 문자열로 변환이 되어 저장됨. 즉 JSON.parse 등을 사용해 원하는 타입으로 재변환할 필요가 있음.
  local.Storage.setItem("데이터 이름', '데이터'); // 데이터 추가
  local.Storage.getItem("데이터 이름'); // 데이터 조회
  local.Storage.removeItem("데이터 이름'); // 데이터 삭제

이전에 만들던 방식으로는 localStorage에 저장은 되는데 초기상태로 불러와서 사용자에게 보이게 만드는 것이 자꾸 꼬였다...
결국에는 일단 원리를 이해하기 위해 과제 예시 페이지 클론코딩 같은 느낌으로 진행했다.

css가 아니라 globalstyle.js이라는 파일을 하나 만들고 각 컴포넌트 안에서 직접 스타일을 선언해서 페이지를 꾸미는 방식을 처음 사용해봤는데 개인적으로는 css 파일 하나로 디자인하는 것이 편한 것 같다.
그래도 새로운 방식으로 디자인 하는 법을 또 새로 배울 수 있어서 좋았다.
(아직 꼼꼼한 디자인은 어렵지만...)

한 학기 동안 많은 것을 배운 것 같긴 하지만 아직도 많이 많이 부족하다...
방학에 다시 복습하고 과제들도 다시 만들어 보아야겠다.
그나마 vscode 사용에 익숙해지고 단축키도 여러 개 알게 된 것은 다행이다....
