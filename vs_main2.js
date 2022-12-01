var i = 1;
var num = document.getElementsByClassName("screen").length;
var back = document.getElementById("btn1");
var next = document.getElementById("btn2");
var bg = document.getElementsByClassName("bgColor");

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

  if (i == 1) {
    next.style.display = "none";
    back.style.display=  "none";
    setTimeout(() => {
      back.style.display= "";
      next.style.display = "";
    }, 7);
  }

  if (i == 2) {
    next.style.display = "none";
    back.style.display=  "none";
    setTimeout(() => {
      back.style.display= "";
      next.style.display = "";
    }, 3);
  }

  if (i == 3) {
    next.style.display = "none";
    back.style.display=  "none";
    setTimeout(() => {
      back.style.display= "";
      next.style.display = "";
    }, 3);
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
