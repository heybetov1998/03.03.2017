var r = document.getElementById('red');
var y = document.getElementById('yellow');
var g = document.getElementById('green');
function red() {
    r.style.backgroundColor = "#e21b1b";
    y.style.backgroundColor = "#666666";
    g.style.backgroundColor = "#666666";
}

function yellow() {
    r.style.backgroundColor = "#666666";
    y.style.backgroundColor = "#ffcc26";
    g.style.backgroundColor = "#666666";
}

function green() {
    r.style.backgroundColor = "#666666";
    y.style.backgroundColor = "#666666";
    g.style.backgroundColor = "#17d117";
}

function change() {
    setTimeout(red, 1000);
    setTimeout(yellow, 6000);
    setTimeout(green, 8000);
}
change();
setInterval(change, 11000);
