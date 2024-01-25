document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector('button');
    let numberDisplay = document.querySelector('h1');
    let number = 0;
    numberDisplay.innerHTML = number;
    button.addEventListener('click', function () {
        number++;
        numberDisplay.innerHTML = number;
        numberDisplay.style.color = Math.floor(Math.random()*16777215).toString(16);
        if (number % 7 == 0) {
            alert("Du hast die Zahl " + number + " erreicht!");
        }
    });
});