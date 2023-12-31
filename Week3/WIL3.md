이번 주의 과제는 Vanilla JS로 투두리스트를 구현하는 것이었다. 구현할 기능은 다음과 같다.

- input에 할 일을 입력한 뒤 추가 버튼을 누르면 todo 목록에 추가됩니다.
- todo 목록의 아이템을 클릭하면 done으로, done 목록의 아이템을 클릭하면 todo로 이동할 수 있게 합니다.
- 아이템 삭제를 누르면 화면에서 삭제될 수 있도록 합니다.

1.  과제를 시작하기 앞서 Vanilla JS로 구현한다는 말을 제대로 이해하고자 관련 문서들을 읽어보았다.

    - 바닐라 자바스크립트는 외부의 라이브러리나 프레임워크를 이용하지 않는 순수 자바스크립트를 말하며, 라이브러리나 프레임워크를 사용하지 않기 때문에 그걸 사용했을 때보다 빠르고 호환성이 좋다는 것이 특징이다. 하지만 라이브러리를 활용하면 간단하게 작성할 수 있는 코드도 바닐라 JS로 작성하면 길어지고 복잡해진다는 어려움이 있다. 그럼에도 바닐라 JS 능력이 중요한 이유는 JS의 본질을 제대로 알지 못한 상태에서 편의성만을 위해 프레임워크나 라이브러리를 활용하는 것에 대한 문제가 제기 되었기 때문이다.
    - 사실 아직 경험이 부족해 프레임워크/라이브러리에 대해 애초에 잘 모르기 때문에 헷갈리지는 않겠다고 생각했다...
    - 바닐라 JS를 지향하자는 것은 프레임워크나 라이브러리를 무조건 금지하자는 의미가 아닌, 지나치게 의존하지 말자는 것이 핵심!

2.  우선 index.html로 큰 틀을 잡았다. head와 body를 나누고 title을 작성했다.

3.  js 코드는 감이 안 잡혀서 여러 사람들의 코드를 읽어보고, 그 전에 무슨 기능을 어떻게 해야할지 고민하는데 많은 도움을 받았다.

해야할 것은 사용자가 해야할 일 목록을 input 박스에 입력하면 글자를 받아서 ul 목록에 넣어 보여주기.

- DOM을 이용해서 HTML 문서에서 form, input, ul을 가져온다.
- form에 submit 이벤트를 감지하는 이벤트 리스너를 달아준다.
- 이벤트 리스너는 submit event가 발생하면 콜백으로 createtodo 함수를 실행한다. createtodo 함수는 event를 인자로 받고, form이 submit될 때 페이지가 새로고침되는 기본 동작을 막고 input에 입력된 값을 변수로 선언해서 painttodo 함수에 넣어준다. painttodo 함수가 실행되고 나면 input을 비워준다. painttodo 함수는 input에 입력한 값을 인자로 받는다.
- 초기. 코드 실행에 따르면 HTML 문서가 js 파일을 불러오고, 가장 먼저 init 함수가 실행된다. 이 때 init 함수에서는 form이 submit될 때 createToDo 함수를 실행하고, 화면에 todo들을 보여주기 위한 paintTodo 함수를 실행한다.
- 이 때 이 목록이 페이지가 새로고침 되어도 그대로 존재해야 한다. local Storage를 사용해 데이터를 저장, 저장된 데이터를 먼저 불러와서 보여주기.
- local Stroage에 string 값이 아닌 값을 저장하려고 할 때에는 JSON.stringify 메서드를 사용해서 객체를 JSON 문자열로 변환해서 저장해야 한다.

4. 기능 부분을 구현하다가 다 한 목록을 옮기는 부분에서 막혀 일단 CSS 위주로 이것저것 해보며 경험을 쌓았다... JS 코드는 시간 나는대로 더 찾아보고 계속 수정해보아야겠다.

5. 예시로 제공해주신 페이지를 (많이) 참고해서 다 엎어 고쳐 기능 구현은 되게 만들어놓았는데, toggle할 때 목록 자체가 아니라 다른 버튼을 하나 만들어주고 싶다. 단순히 event만 옮긴다고 되는 건 아닌 듯. 더 찾아보고 이것저것 해보아야겠다.... 오류 메세지를 보면 isDone에 접근하는데 문제가 생기는 것 같다. 아마 toggleItem 함수에서 접근해야 하는 것들이 버튼과 연동되지 않아서인 것 같은데... 나는 무지하다... 더 생각해보아야겠다.
