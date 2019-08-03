"use strict";
document.getElementById("game").style.display = "none";
let level = 1, lvl, wrong = 0, wrng, time = 400, i1 = 1, i2 = 10, temp, ent, hint = 0, nb;

function start() {
    setTimeout(function () {
        ent = document.getElementById("in");
        nb = document.getElementById("number");
        wrng = document.getElementById("wrong");
        lvl = document.getElementById("level");
        game.removeAttribute("style");
        let start = document.getElementsByClassName("start");
        document.getElementsByTagName("body")[0].removeChild(start[0]);
        lvl.innerText = level;
        wrng.innerText = wrong;
        addStar();
        showNumber(i1, i2, time);
    }, 1000);
}
function addStar() {
    nb.innerText = "";
    for (let i = 1; i <= level; i++) {
        nb.innerText += '*';
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max = Math.floor(max) - 1 - Math.ceil(min) + 1)) + Math.ceil(min);
}
function showNumber(min, max, time) {
    temp = getRandomInt(min, max);
    nb.innerText = temp;
    setTimeout(addStar, time);
}
function showTemp(time) {
    if (hint++ >= 3) alert("no hint available");
    else {
        nb.innerText = temp;
        setTimeout(addStar, time);
    }
}
document.getElementsByTagName("form")[0].addEventListener("submit", function (e) {
    e.preventDefault();
    if (ent.value == temp) {
        lvl.innerText = level++;
        nb.innerText = ent.value;
        addStar();
        hint = 0;
        showNumber(i1 += '0', i2 += '0', time += 250);
    }
    else {
        wrng.innerText = ++wrong;
        if (wrong >= 3) {
            nb.innerText = temp = "Game Over! You loose";
            ent.disable = true;
            document.getElementsByTagName("button")[0].style.display = "none";
            document.getElementsByTagName("button")[1].innerText = "Restart";
            document.getElementsByTagName("button")[1].setAttribute("onClick", " location.reload() ");
            setTimeout(function () {
                location.reload()
            }, 10000);
        }
    } ent.autofocus;
    ent.value = "";
});