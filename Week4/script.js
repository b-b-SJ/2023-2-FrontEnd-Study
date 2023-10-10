document.addEventListener('DOMContentLoaded', function () {
  const inputText = document.querySelector('.input-text'); 
  const acButton = document.querySelector('.reset-operator');

  let currentNum = '';
  let previousNum = '';
  let currentOperator = '';
  let operatorJustClicked = false; //수식에 연산자가 입력되었는지 아닌지

  const updateDisplay = () => {
    inputText.value = currentNum;
  }; //디스플레이에 입력 표시

  const clearData = () => {
    currentNum = '';
    previousNum = '';
    currentOperator = '';
    acButton.innerText = 'AC';
  }; //초기화

  const operate = () => { //계산
    previousNum = parseFloat(previousNum);
    currentNum = parseFloat(currentNum);

    switch (currentOperator) {
      case '+':
        currentNum = previousNum + currentNum;
        break;
      case '-':
        currentNum = previousNum - currentNum;
        break;
      case '×':
        currentNum = previousNum * currentNum;
        break;
      case '÷':
        currentNum = previousNum / currentNum;
        break;
      default:
        return;
    }
    currentOperator = '';
  };

  document
    .querySelector('.button-wrapper') // button의 정보를 가져옴
    
    .addEventListener('click', function (e) {
      const buttonValue = e.target.innerText; //evnet(click) 일어날 때 event target의 innerText를 buttonValue로 받아옴
      acButton.innerText = 'C'; //AC 버튼 글씨 C로 바꾸기

      if (e.target.matches('.number')) { //숫자 눌렀을 때
        if (operatorJustClicked) {
          currentNum = '';
          operatorJustClicked = false;
        }
        currentNum += buttonValue;
        updateDisplay();

      } else if (e.target.matches('.operator')) { //연산자 눌렀을 때
          if (currentOperator && currentNum && previousNum) {
            operate(); //계산!
            updateDisplay();
            previousNum = currentNum;
            currentNum = '';
          } 
          else if (!previousNum) {
            previousNum = currentNum;
            currentNum = '';
          }

        if (buttonValue === '=') {
          if (previousNum && currentOperator) {
            operate();
            updateDisplay();
            previousNum = '';
          }
        } else if (['+', '-', '×', '÷'].includes(buttonValue)) {
          currentOperator = buttonValue;
          currentNum = buttonValue;
          updateDisplay();
          operatorJustClicked = true;
        } else if (buttonValue === '.') {
          if (!currentNum.includes('.')) {
            currentNum += '.';
            updateDisplay();
          }
        }
      } else if (e.target.matches('.reset-operator')) { //AC(C) 눌렀을 때 초기화
        clearData();
        updateDisplay();
      }
    });
});
