var i = 1;
var num = document.getElementsByClassName('screen').length;

//while (i<=num){function nextClick(){}}
function nextClick() {
    var hide = document.getElementById(i);
    var show = document.getElementById(i+1);
    hide.style.display = "none";
    show.style.display = "";
    i++;
}

function backClick() {
    var hide = document.getElementById(i);
    var show = document.getElementById(i-1);
    hide.style.display = "none";
    show.style.display = "";
    i--;
}
