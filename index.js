let num1 = 0,
  num2 = 0,
  ans = 0,
  usrAns = 0,
  count = 0,
  question = 0;

let strNum = "What is ";
let ansBox = document.getElementById("answer-box");
document.addEventListener("keydown", usrEnter);

function usrEnter(e) {
  const keypress = e.key;
  if (keypress == "Enter") {
    e.preventDefault();
    checkVal();
    setNums();
  }
}
function onLoad() {
  setNums();
}

function getRand(x, y) {
  return Math.floor(Math.random() * (x - y)) + y;
}

function setNums() {
  strNum = getEquation();
  document.getElementById("prompt").innerText = strNum;
  const input = document.getElementById("answer-box");
  input.focus();
  input.select();
}

function checkVal() {
  usrAns = document.getElementById("answer-box").value;
  if (usrAns == ans) {
    count++;
    question++;
    document.getElementById("cor-count").innerText = "Correct!";
    document.getElementById("score").innerText =
      "Score: " + count + "/" + question;
  } else {
    question++;
    document.getElementById("cor-count").innerText = "Incorrect!";
    document.getElementById("score").innerText =
      "Score: " + count + "/" + question;
  }
  document.getElementById("answer-box").value = null;
}

function getEquation() {
  let eq = Math.floor(Math.random() * 3);
  switch (eq) {
    case 0:
      num1 = getRand(99, 10);
      num2 = getRand(99, 10);
      ans = num1 + num2;
      return "What is " + num1 + " + " + num2 + "?";
      break;
    case 1:
      num1 = getRand(199, 99);
      num2 = getRand(98, 10);
      ans = num1 - num2;
      return "What is " + num1 + " - " + num2 + "?";
      break;
    case 2:
      num1 = getRand(20, 10);
      num2 = getRand(20, 10);
      ans = num1 * num2;
      return "What is " + num1 + " * " + num2 + "?";
      break;
    default:
      return "ERROR!";
  }
}
