document.getElementById("game").style.display = "none";
let level = 0, wrong = 0, input = document.getElementById("in"),
 currentWordIndex,wArr = [],nonWordArray = [],words,number=document.getElementById("number1");
function start() {
    setTimeout(function () {
        let start = document.getElementsByClassName("start");
        document.getElementsByTagName("body")[0].removeChild(start[0]);
        document.getElementById("game").removeAttribute("style");
        words = ["mohammad", "yamen", "liu", "spring", "car", "hello"];
        currentWordIndex = getRandomInt(0, 6);
        for (let i = 0; i < words[currentWordIndex].length; i++) {
            wArr[i] = (words[currentWordIndex].charAt(i));
            nonWordArray[i] = " __ ";
            number.innerText += nonWordArray[i];
            for (let i = 1; i <= 6; i++) show(i,false);
        }
    }, 1000);
}
function show(id,show) {
  show?document.getElementById(id).removeAttribute("style"):  document.getElementById(id).style.display = "none";
}
document.getElementsByTagName("form")[0].addEventListener("submit", function (e) {
    e.preventDefault();
    if (words[currentWordIndex].indexOf(input.value) > -1) {
        for (let i = 0; i < words[currentWordIndex].length; i++) {
            nonWordArray[words[currentWordIndex].indexOf(input.value, i)] = input.value;
        }
    } else show(++wrong,true);
    if (wrong >= 6) {
        number.innerText = "You Loose :{";
        end();
    } else {
        if (level < words[currentWordIndex].length) {
            number.innerText = "";
            let count = 0;
            for (let i = 0; i < wArr.length; i++) {
                number.innerText += " " + nonWordArray[i];
                if (nonWordArray[i] !== " __ ") {
                    count++;
                }}
            level = count;
        }
        if (level === words[currentWordIndex].length) {
            number.innerHTML += "<br><h1>Game Over</h1>";
            end();
        }}
        input.autofocus;
    });
function getRandomInt(min, max) {
    return Math.floor(Math.random() * ( Math.floor(max) - 1 - Math.ceil(min) + 1)) + Math.ceil(min);
}
function end() {
    input.disable = true;
    document.getElementsByTagName("button")[0].style.display = "none";
    setTimeout(function () {
        location.reload()
    }, 10000);
}