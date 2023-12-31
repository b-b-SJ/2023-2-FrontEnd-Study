Week1. 모던 자바스크립트 입문 1~7장

1장. 자바 스크립트의 개요

- 컴파일 언어 : 소스 코드 여러 개를 하나로 묶어서 컴파일 한 후 실행하는 프로그래밍 언어로 C, C++, Java, Objective C 등이 있다. 컴파일 하는데 시간이 걸리지만 실행되는 속도가 빠르다
- 인터프리터 언어 : 프로그램을 한 줄마다 기계어로 번역해서 실행하는 프로그래밍 언어
  로 JavaScript, Python, Ruby, Perl, LISP 등이 있다. 프로그램을 바로 실행할 수 있고 동작을 확인해가며 프로그램을 개발할 수 있지만 코드를 한줄씩 기계어로 번역하며 실행하므로 컴파일 언어에 비해 처리속도가 느리다.
- 프로그래밍 언어의 유형 : 절차적 언어, 객체 지향 언어, 함수형 언어, 논리형 언어

  1.2 자바 스크립트의 특징

- 인터프리터 언어 : 최근 웹 브라우저 대부분에는 실행 시간에 JS 코드를 컴파일 하는 JIT(Just In Time Compiler)가 내장되어 있어 실행속도가 매우 빨라졌다.
- 프로토타입 기반 객체 지향 언어
  클래스 기반 객체 지향 언어 : 클래스를 이용하여 객체를 생성 (ex) C++, Java)
  프로토타입 기반 객체 지향 언어 : 클래스가 아닌 프로토타입을 상속하는 프로토타입 기반 객체 지향 언어 (JavaScript)
- 동적 타입 언어
  정적 타입 언어 : 실행되기 전에 변수 타입이 결정됨 (ex) C++, Java)
  동적 타입 언어 : 프로그램 실행 중 변수에 저장되는 데이터 타입이 동적으로 바뀔 수 있음 (JavaScript)
- 함수가 일급 객체 : JS의 함수는 객체이며 함수에 함수를 인수로 넘길 수 있다. 따라서 JS의 함수는 일급(First class object)이며, 이 특성을 활용해 고차 함수를 구현, 함수형 프로그래밍이 가능하다.
- 함수가 클로저를 정의 : JS의 함수는 클로저(closure)를 정의한다. 변수 은닉, 영속성 보장 등 다양한 기능을 구현할 수 있다.

  1.3 자바 스크립트의 기술적 요소

- ECMAScript (코어 언어)
- 클라이언트 측 자바스크립트는 코어 언어와 웹 브라우저의 API로 구성되어 있다. (주요 API : Window 인터페이스, DOM, XLHttpRequest)

2장. 프로그램의 작성법과 실행법

- 실행법 종류 : 웬 브라우저의 콘솔에서 실행, JS 코드를 HTML 문서에 삽입하여 웬 브라우저로 실행, Node.js의 대화형 모드로 실행, Node.js 파일을 읽어 들여 실행
- 작성법 : 문자코드는 유니코드 문자를 사용하며 대문자와 소문자를 구별한다. 프로그램을 구성하는 최소 단위는 토큰(어휘)이며, 프로그램을 토큰으로 분해 후 JS의 구문 규약에 비추어 올바른 프로그램인지 판정하는 구문 분석(파싱) 진행한다. 공백 문자는 여러 개도 하나만 입력한 것으로 간주, 이를 이용해 가독성을 높일 수 있다.

3장. 변수와 값

- 변수 선언 : var sum; / var는 JS 키워드로 변수를 선언하기 위한 선언자, sum 부분은 변수 이름이다. 변수를 선언하지 않은 상태에서 값을 대입하면 JS 엔진이 그 변수를 자동으로 전역 변수로 선언한다. 프로그램은 순차적으로 실행되지만 변수 선언은 변수 선언의 끌어올림(호이스팅, hoisting)에 의해 프로그램 첫머리로 끌어올려진다. 이는 JS의 고유한 특징으로, 변수 선언부를 프로그램 윗부분에 위치시켜야 한다는 주장이 일반적이다.
- 예약어 : JS 언어 사양에서 사용하는 특수한 키워드. ECMAScript 6 예약어 참조
- 데이터 타입 : JS는 동적 타입 언어로 변수에 타입이 없으며 실행할 때 변수에 저장된 데이터 타입을 동적으로 바꿀 수 있다. JS가 처리할 수 있는 데이터 타입은 크게 원시 타입과 객체 타입 두 가지이다.
- > 원시 타입 : 숫자, 문자열, 논리값, 특수한 값(undefined, null), 심벌. 데이터를 구성하는 가장 기본적인 요소로 불변 값으로 정의되어 있다. / 객체 타입 : 원시 타입에 속하지 않는 JS의 값을 객체라고 한다. 배열, 함수, 정규 표현식 등 다양한 요소가 객체이며 객체 안에 저장된 값은 바꿀 수 있다.

4장. 객체와 배열, 함수의 기초

- 객체 : 이름과 값을 한 쌍으로 묶은 데이터를 여러 개 모은 것. 데이터 여러 개를 하나로 모은 복합 데이터로 연관 배열 또는 사전이라고도 부른다. 객체에 포함된 데이터 하나(이름과 값의 쌍)를 가리켜 객체의 프로퍼티라고 부르며, 프로퍼티의 이름을 키라고 부른다. 객체를 생성하는 것은 객체 리터럴을 사용하는 방법, 생성자라는 함수를 사용하는 방법이 있다.

- > 객체 리터럴을 사용 : ex) var card = { suit: “하트”, rank: “A” }; / {...} 부분이 객체 리터럴이며 객체 리터럴을 변수 card에 대입하고 있다. 변수에 대입한 객체 안 프로퍼티 값을 읽거나 쓸 때는 마침표(.) 연산자 또는 대괄호 연산자([])를 사용한다. / ex) card.suit
- 없는 프로퍼트 이름에 값을 대입하면 새로운 프로퍼티가 추가되고, delete 연산자를 사용해 프로퍼티를 삭제할 수 있다. in 연산자로 객체에 특정 프로퍼티가 있는지 확인할 수 있다. 객체 타입의 값을 변수에 대입하면 객체의 참조가 저장된다.
- 매서드 : 프로퍼티에 저장된 값의 타입이 함수인 프로퍼티

- 함수 : 함수의 입력 값을 인수, 함수의 출력값을 반환값이라고 부른다. 함수는 function 키워드로 정의한다. ex) function square(x) { return x\*x; } / 함수를 호출할 때는 함수 이름 뒤에 소괄호로 인수를 묶어 입력한다.
- 함수의 실행 흐름 : 호출한 코드에 있는 인수가 함수 정의문의 인자에 대입 > 함수 정의문의 중괄호 안에 작성된 프로그램이 순차적으로 실행 > return 문이 실행되면 호출한 코드로 돌아감, return문 값은 함수의 반환값이 됨 . return문이 실행되지 않은 상태로 마지막 문장이 실행되면 호출한 코드로 돌아간 후 undefined가 함수의 반환값이 됨
- JS 엔진은 변수 선언문과 마찬가지로 함수 선언문을 프로그램 첫 머리로 끌어올린다.
- 참조에 의한 호출과 값에 의한 호출에 따라 동작이 다르다. 함수에 넘겨야 하는 인수 개수가 많아지면 여러 문제가 발생하기 때문에 객체의 프로퍼티에 인수를 담아서 넘기는 방식을 사용하는 것이 좋다. 단, 함수 안에서 객체 프로퍼티를 수정하면 호출한 코드에 있는 인수 객체의 프로퍼티가 함께 바뀌므로 주의해야 한다. (객체를 인수로 넘기면 함수에 객체의 참조가 전달되기 때문)
- 변수에 접근할 수 있는 범위를 그 변수의 유효 범위라고 한다. 프로그램의 구문 만으로 유효 범위를 정하는 어휘적 범위, 프로그램 실행 중 유효 범위를 정하는 동적 범위 두 가지 방법으로 유효 범위를 결정할 수 있다. JS 변수는 변수의 유효 범위에 따라 전역 변수, 지역 변수로 나뉜다.
- let 선언자 : let문은 블록 유효 범위를 갖는 지역 변수를 선언한다.
- const 선언자 : const문은 블록 유효 범위를 가지며 한 번만 할당할 수 있는 변수를 선언한다. const문으로 선언한 상수는 let문으로 선언한 변수처럼 동작하지만 반드시 초기화해야 한다는 차이점이 있다.
- 함수는 함수 리터럴로도 정의 할 수 있다. 함수 리터럴은 이름이 없는 함수이므로 익명 함수 또는 무명 함수라고 부른다. 함수 선언문과 달리 함수 리터럴 사용 시 끝에 반드시 세미콜론을 붙여야 한다.
- 메서드를 정의할 때는 프로퍼티 값으로 함수 리터럴을 대입한다. 일반적으로 메서드는 메서드가 속한 객체의 내부 데이터(프로퍼티 값) 상태를 바꾸는 용도로 사용한다.

- 생성자로 객체 생성 : Java와 C++ 등은 같은 프로퍼티를 갖는 객체를 여러 개 생성하는 수단으로 클래스를 제공하지만, JS에는 클래스가 없다. 대신 생성자라는 함수로 객체를 생성할 수 있다. / ex) var card = new Card(“하트”, “A”); / new 연산자를 사용한다. 생성자와 new 연산자로 생성한 객체를 그 생성자의 인스턴스라고 부른다. 생성자는 객체를 생성하고 초기화하는 역할을 한다. 생성자를 사용하면 이름은 같지만 프로퍼티 값이 다른 객체 여러 개를 효율적으로 생성할 수 있다.
- 내장 객체 : 사용자가 정의하는 생성자 외에도 JS에 처음부터 포함된 ‘내장 생성자’가 있다. ex) 날짜와 시간을 표현하는 객체를 생성하는 Date 생성자, 함수를 생성하는 Function 생성자 등
- 자바 스크립트 객체의 분류 : 네이티브 객체, 호스트 객체, 사용자 정의 객체
- ＞ 네이티브 객체 : ECMAScript 사용에 정의된 객체. 내장 생성자로 생성된 객체 등
- > 호스트 객체 : JS 실행 환경에 정의된 객체. 브라우저 객체 등
- > 사용자 정의 객체 : 사용자가 정의한 자바스크립트 코드를 실행한 결과로 생성된 객체

- 배열 : 배열은 배열 리터럴 또는 Array 생성자로 생성할 수 있다. 배열 리터럴은 쉼표로 구분한 값을 대괄호로 묶어서 표현한다. [...] 분이 배열 리터럴이며 배열 값 하나를 배열 요소라고 부른다. 요소에 매긴 번호는 요소 번호 또는 인덱스라고 부른다. 변수의 요소에는 모든 타입의 값이 올 수 있다.
- 배열의 length 프로퍼티에는 배열 요소의 최대 인덱스 값 + 1이 담겨 있다. length 프로퍼티 값을 가리켜 배열 길이라고 부른다.

5장. 표현식과 연산자

- 표현식이란 결과적으로 어떤 값으로 평가되는 것으로, 표현식을 평가한다는 것은 표현식의 값과 변수, 함수 등의 값을 바탕으로 식의 값을 계산하는 행위를 뜻한다. 가장 간단한 표현식은 숫자, 문자열, 논리값 등의 원시 값이며 변수, 프로퍼티, 배열 요소, 함수 호출, 메서드 호출도 표현식이다. 또한 연산자를 사용하면 더욱 복잡한 표현식을 만들 수 있다.
- 산술 연산자 : 피연산자가 숫자인 연산자. 피연산자가 숫자가 아닐 때는 연산자가 피연산자 타입을 숫자 타입으로 바꾸어 연산한다.
- JS에서는 기본적인 산술 연산과 복잡한 수학적 연산을 지원하며 이들은 Math 객체의 프로퍼티와 메서드에 포함되어 있다. Math 객체 참고.
- 산술 연산을 할 때는 숫자에 유효한 자릿수가 있으므로 계산할 때 오차가 발생한다는 점을 항상 염두에 두어야 한다. JS의 숫자는 64비트 부동소수점이다.
- 문자열 처리 : + 연산자는 피연산자가 모두 문자열이면 문자열로 연결한다. 피연산자 중 하나가 문자열 또는 문자열로 변환할 수 있는 객체라면 다른 피연산자의 타입을 문자열로 바꾼 다음 연결한다. 그렇지 않으면 피연산자 두 개를 숫자 또는 NaN으로 타입을 바꾸어 더한다. / 문자열을 처리하기 위한 객체 String. 문자열을 String 생성자를 사용하여 String 객체로 변환한다. 이처럼 원시 값을 객체로 변환하는 행위를 원시 값을 객체로 래핑(wrapping)한다고 한다.
- 문자열에서 프로퍼티를 사용하려고 하면 문자열이 자동으로 String 객체로 변환된다. / ex) var c = msg.charAt(3);를 실행할 때 내부적으로는 다음과 같은 작업이 실행된다. var msgObj = new String(msg); var c = msgObj.charAt(3);

- 관계 연산자 : 두 개의 피연산자 비교 결과를 논리값(T/F)로 반환한다. 동일 연산자(==. 좌변과 우변의 피연산자가 같은지 느슨하게), 일치 연산자(===. 피연산자 평가 후 타입을 변환하지 않은 상태 엄격히 비교. 타입과 값이 모두 같아야 같다고 판정) 등
- 논리 연산자 : 관계 연산자를 사용하여 만든 논리식과 결합, 더욱 복잡한 논리를 정의한다. 논리곱(&&), 논리합(||) 연산자 등
- 비트 연산 : 2진수 숫자의 자리별 값(비트 값)을 다루는 연산
- 비트 논리 연산자 : 비트 값이 0이면 false, 1이면 true로 평가하는 연산자
- 비트 시프트 연산자 : 정수를 2진수 비트 단위로 오른쪽 또는 왼쪽으로 이동시키는 연산자
- type of 연산자 : 단항 연산자로 피연산자의 데이터 타입을 뜻하는 문자열을 반환한다.
- 조건(?:) 연산자 : 주어진 조건의 참과 거짓에 따라 값을 선택한다.
- 쉼표 연산자 : 이항 연산자로 왼쪽 피연산자를 평가하고 오른쪽 피연산자를 평가한 이후에 마지막으로 오른쪽 끝 피연산자의 값을 반환한다. for문에서 자주 사용.
- eval 함수 : 함수일 뿐 연산자가 아니지만 원래는 연산자의 역할을 담당함. 문자열 단 하나만을 인수로 받아서 JS 코드로 해석한다.

- 명시적 타입 변환 : JS는 피연산자 타입을 묵시적으로 변환, 유연하게 계산하지만 변수 값을 출력할 때처럼 명시적으로 변환해야 할 때도 있다.
- 숫자를 문자열로 / > 숫자 + 문자열 : 숫자의 타입이 문자열로 바뀐다. / > String 함수 활용 : 모든 데이터 타입을 문자열 타입으로 바꿀 수 있다.
- 문자열을 숫자로 / > 수식 안에서 묵시적으로 바꾸는 두 가지 방법 : var s = “2”; s-0 //2 +s //2 / > parseInt와 parseFloat 함수를 사용 / > Number 함수를 활용하는 방법 : Number 생성자 앞에 new를 붙이지 않으면 일반 함수로 활용 가능. 이 때 반환값은 숫자이다.
- 논리값으로 / 모든 값을 논리값으로 바꾸는 방법은 두 가지 : > !!x / > Boolean(x)
  6장. 웹 브라우저에서의 입출력
- 대화 상자 표시하기 : 메서드 세 개(alert, prompt, confirm)
- > window.alert : 경고 대화상자를 표시. 인수로는 경고 문자열을 받는다. / window.prompt : 사용자의 문자열 입력을 받는 대화상자를 표시. 인수로는 입력을 보조하는 문자열을 받는다. / window.confirm : [확인] 버튼과 [취소] 버튼이 있는 대화상자를 표시. 인수로는 메시지를 뜻하는 문자열을 받는다.
- Console 객체의 메서드로 콘솔에 값 출력하기
- 문자열이나 변수 값을 콘솔에 로그로 출력하려면 console.log, console.info, console.warn, console.error 메서드를 사용한다. 받는 인수와 표시하는 문자열은 같고 단지 메서드에 따라 로그 스타일이 다르다.
- console.dir 메서드는 객체의 프로퍼티를 나열한다.
- console.time과 console.timeEnd 메서드를 사용해 특정 코드의 실행 시간을 측정할 수 있다.

- 이벤트 : 사용자가 버튼을 클릭하는 행위처럼 단말기와 애플리케이션이 처리할 수 있는 동작이나 사건.
- 이벤트 주도형 프로그램 : 이벤트가 발생할 때까지 기다렸다가 이벤트가 발생했을 때 미리 등록해 둔 작업을 수행하는 프로그램. 웹 브라우저에서 동작하는 프로그램은 기본적으로 이벤트 주도형 프로그램이다.
- 이벤트 처리기 : 이벤트가 발생했을 때 실행되는 함수

- 6.3.2 HTML 요소의 속성에 이벤트 처리기 등록하기 : 교재 코드를 입력하여 실습함
- 타이머 : 웹 브라우저 Window 객체에는 setTimeout과 setInterval 메서드가 있다. setTimeout은 지정된 시간이 흐른 후에 함수 실행, setInterval은 지정된 시간마다 반복해서 실행.

- HTML 요소를 동적으로 읽고 쓰기 : 이를 활용하면 HTML의 폼 요소 등을 사용자 인터페이스로 삼아 프로그램 입출력을 할 수 있게 된다.
- 요소 객체의 interHTML 프로퍼티는 그 HTML 요소의 내용을 가르키며 이로써 HTML 요소의 내용을 읽거나 쓸 수 있다. input, select, textarea 요소 등의 폼 컨트롤 요소를 사용하면 사용자의 입력 값을 JS 프로그램에서 사용할 수 있다.
- document.write 메서드는 인수로 받은 문자열을 HTML 문서 body 요소 안에 출력한다.
- Canvas : 웹 브라우저에서 그래픽을 처리하기 위해 추가된 HTML5 구성 요소로 즉시 실행형(그림 상태를 제공하는 중간 데이터 계층 없음) 저수준 API(기본적인 기능만 제공)이다. canvas를 사용해 여러 도형을 그리거나 펜 이동 시키기, 그래픽스 속성을 설정하기, 이미지를 표시할 수 있다.

7장. 제어 구문

- 문장은 일반적으로 위에서 아래 방향으로 순차적 실행된다. 순차적 실행 흐름을 변화시키는 문장을 제어 구문이라고 하고 조건문, 반복문, 점프문이 있다.
- 조건문 : if/else문, switch문, try/catch/finally문. 조건에 따라 처리를 분기
- 반복문 : while문, do/while문, for문, for/in문, for/of문. 조건을 만족하면 처리를 반복 실행
- 점프문 : break문, continue문, return문, throw문. 프로그램의 다른 위치로 이동

- 조건문
- > if/else문 : if (조건식) 문장 1 else { 문장 2 }. 조건식이 true면 문장을 실행한다.
- > switch문 ; case 표현식: 의 형식을 갖춘 case 라벨 여러 개를 작성하여 분기점 여러 개를 더 간결하게 표현할 수 있다.
- 반복문
- > while문 : while (조건식) 문장. 먼저 조건식을 평가하고 결과가 false면 while문을 빠져나오고 true면 문장 실행 후 다시 시작 부분으로 돌아가 조건식을 평가한다. break문과 continue문을 사용할 수 있다.
- > do/while문 : do 문장 while(조건식);. 끝에 반드시 세미콜론 붙인다. 먼저 문장을 실행하고 뒤에 조건식을 평가한다. false면 빠져나오고 true면 다시 시작 부분으로 이동한다.
- > for문 : for ( 초기화 식; 조건식; 반복식 ) 문장. 반복문 시작 이전 초기화 식을 단 한 번 실행, 그 후 조건식을 먼저 평가하고 true면 문장 실행 후 반복식 실행. 그리고 다시 시작부분으로 돌아가 조건식을 평가한다.
- > for/in문 : for ( 변수 in 객체 표현식 ) 문장. 객체 안의 프로퍼티를 순회하는 반복문. 먼저 객체 표현식을 평가하고 undefined 또는 null로 평가되면 빠져나온다. 객체로 평가되면 객체의 프로퍼티 이름이 차례대로 변수에 할당되고 각각의 프로퍼티에 대해 문장이 한 번 씩 실행된다.
- 점프문
- > 라벨문 : 라벨 이름 : 문장 / break문 / continue문
- 교재의 응용 예제 : 망델브로 집합 그리기, 암호 원판을 활용한 암호화
