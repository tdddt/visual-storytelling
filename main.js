var i = 1;
var num = document.getElementsByClassName("screen").length;
var back = document.getElementById("btn1");
var next = document.getElementById("btn2");
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
    setTimeout(() => {
      next.style.display = "";
    }, 2500);
  }
  if (i == 3) {
    next.style.display = "none";
    setTimeout(() => {
      next.style.display = "";
    }, 6000);
  }
  if (i == 4) {
    next.style.display = "none";
    setTimeout(() => {
      next.style.display = "";
    }, 9000);
  }
  if (i == 5) {
    next.style.display = "none";
    setTimeout(() => {
      next.style.display = "";
    }, 1000);
  }

  if (i == 6) {
    next.style.display = "none";
    setTimeout(() => {
      next.style.display = "";
    }, 5000);
  }
  if (i == 7) {
    next.style.display = "none";
    setTimeout(() => {
      next.style.display = "";
    }, 6000);
  }
  if (i == 10) {
    next.style.display = "none";
    setTimeout(() => {
      next.style.display = "";
    }, 5000);
  }
  if (i == 11) {
    next.style.display = "none";
    setTimeout(() => {
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
