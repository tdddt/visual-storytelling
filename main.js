var i = 1;
var num = document.getElementsByClassName("screen").length;
var back = document.getElementById("btn1");
var next = document.getElementById("btn2");
var bg = document.getElementsByClassName("bgColor");
var kp = document.getElementsByClassName("keyplan");

//while (i<=0){function nextClick(){}}
function nextClick() {
  if (i <= num) {
    var hide = document.getElementById(i);
    var show = document.getElementById(i + 1);
    hide.style.display = "none";
    show.style.display = "";
    i++;
  }
  hideBack();

  if (i == 2) {
    next.style.display = "none";
    var ch2 = document.getElementsByClassName("ch2")[0];
    var text2 = document.getElementById("text2");
    setTimeout(() => {
      ch2.style.display = "";
    }, 1500);
    setTimeout(() => {
      text2.style.display = "";
      next.style.display = "";
    }, 2500);
  }
  if (i == 3) {
    next.style.display = "none";
    var text3 = document.getElementById("textIn3");
    var invi3_1 = document.getElementById("invi3_change1");
    var invi3_2 = document.getElementById("invi3_change2");
    //초대장 배경 나타남
    setTimeout(() => {
      bg[0].style.display = "";
    }, 4000);
    //초대장 변경
    setTimeout(() => {
      invi3_1.style.display = "none";
      invi3_2.style.display = "";
    }, 6500);
    setTimeout(() => {
      next.style.display = "";
      text3.style.display = "";
    }, 8000);
  }
  if (i == 4) {
    var owner4 = document.getElementsByClassName("owner4")[0];
    var info4C = document.getElementById("info4C");
    next.style.display = "none";

    setTimeout(() => {
      owner4.style.display = "";
    }, 10000);
    setTimeout(() => {
      info4C.style.display = "";
      next.style.display = "";
    }, 10500);
  }
  if (i == 5) {
    var ch5 = document.getElementById("ch5");
    var ch5_2 = document.getElementById("ch5_2");
    var ch5_3 = document.getElementById("ch5_3");
    var nf1 = document.getElementById("nextfloor1");
    var bg5_1 = document.getElementById("bg5_1");
    var ch5_4 = document.getElementById("ch5_4");
    var seed = document.getElementById("seed5");
    var text = document.getElementsByClassName("text5")[0];
    next.style.display = "none";

    setTimeout(() => {
      ch5.style.display = "none";
      ch5_2.style.display = "";
    }, 5000);

    setTimeout(() => {
      ch5_3.style.display = "";
    }, 6500);

    setTimeout(() => {
      nf1.style.display = "";
      bg5_1.style.display = "";
      kp[0].style.display = "";
      ch5_3.style.display = "none";
      ch5_4.style.display = "";
      seed.style.display = "";
    }, 7500);

    setTimeout(() => {
      text.style.display = "";
    }, 16000);
    setTimeout(() => {
      next.style.display = "";
    }, 17000);
  }

  if (i == 6) {
    next.style.display = "none";
    setTimeout(() => {
      next.style.display = "";
    }, 5000);
  }
  if (i == 7) {
    next.style.display = "none";
    var text = document.getElementsByClassName("text7")[0];
    setTimeout(() => {
      text.style.display = "";
      next.style.display = "";
    }, 8000);
  }
  if (i == 10) {
    next.style.display = "none";
    setTimeout(() => {
      next.style.display = "";
    }, 5000);
  }
  if (i == 11) {
    next.style.display = "none";
    var text = document.getElementsByClassName("text7")[3];
    setTimeout(() => {
      text.style.display = "";
      next.style.display = "";
    }, 8000);
  }

  console.log(i);
}

function backClick() {
  if (i > 0) {
    var hide = document.getElementById(i);
    var show = document.getElementById(i - 1);
    hide.style.display = "none";
    show.style.display = "";
    i--;
  }

  hideBack();

  console.log(i);
}

function hideBack() {
  if (i == 1) {
    back.style.display = "none";
  } else {
    back.style.display = "";
  }
}

hideBack();
