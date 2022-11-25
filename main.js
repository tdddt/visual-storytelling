var i = 9;
var num = document.getElementsByClassName("screen").length;
var back = document.getElementById("btn1");
var next = document.getElementById("btn2");

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
    }, 9000);
    setTimeout(() => {
      next.style.display = "";
      ch10.style.display = "";
    }, 15000);
  }
  if (i == 10) {
    var text10 = document.getElementById("text10");
    setTimeout(() => {
      text10.style.display = "";
    }, 5000);
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
