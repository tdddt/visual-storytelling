var i = 1;
var num = document.getElementsByClassName("screen").length;
var back = document.getElementById("btn1");
var next = document.getElementById("btn2");
var bg = document.getElementsByClassName('bgColor');

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

  if(i==2){
    next.style.display = "none";
    var ch2 = document.getElementsByClassName('ch2')[0];
    var text2 = document.getElementById('text2');
    setTimeout(() => {
      ch2.style.display = "";
    }, 2000);
    setTimeout(() => {
      text2.style.display = "";
      next.style.display = "";
    }, 3000);
  }
  if(i==3){
    next.style.display="none";
    var text3 = document.getElementById('textIn3');
    var invi3_1 = document.getElementById('invi3_change1');
    var invi3_2 = document.getElementById('invi3_change2');
    //초대장 배경 나타남
    setTimeout(() => {
      bg[0].style.display="";
    }, 4000);
    //초대장 변경
    setTimeout(() => {
      invi3_1.style.display = "none";
      invi3_2.style.display="";
    }, 5500);
    setTimeout(() => {
      next.style.display = "";
      text3.style.display="";
    }, 7000);
  }

  if (i == 8) {
    next.style.display = "none";
    setTimeout(() => {
      next.style.display = "";
    }, 5000);
  }
  if (i == 9) {
    next.style.display = "none";
    var nf1 = document.getElementById("nextfloor1");
    var bg10 = document.getElementById("bg10");
    var ch10 = document.getElementById("ch10");
    var ch9 = document.getElementById("ch9");
    setTimeout(() => {
      nf1.style.display = "";
      bg10.style.display = "";
      ch9.style.display = "none";
    }, 8000);
    setTimeout(() => {
      next.style.display = "";
      ch10.style.display = "";
    }, 13000);
  }
  if (i == 10) {
    next.style.display = "none";
    var text10 = document.getElementById("text10");
    setTimeout(() => {
      text10.style.display = "";
    }, 5000);
    setTimeout(() => {
      next.style.display = "";
    }, 7000);
  }
  if (i == 11) {
    next.style.display = "none";
    setTimeout(() => {
      next.style.display = "";
    }, 8000);
  }
  if (i == 12) {
    var text12 = document.getElementsByClassName("text12")[0];
    setTimeout(() => {
      text12.style.display = "";
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
