let buttonBuy = document.getElementById('buyingButton');
let buttonLogIn = document.getElementById('logInButton');
let buttonHover = document.getElementById('hoverButton');
let buttonUnHover = document.getElementById('unHoverButton');
let buttonWheel = document.getElementById('wheelButton');
let changeColorButton = document.getElementById('colorButton');
let text = document.querySelector('h1');
const allDivs = document.querySelectorAll('div');

buttonBuy.onclick = function() {
    alert("Hello!");
}

buttonLogIn.onclick = function() {
    alert("Succsesfully Loged In");
}

buttonHover.onmouseover = function() {
    alert("You hovered this button");
}

buttonUnHover.onmouseleave = function() {
    alert("You left me alone!")
}

buttonWheel.onmousewheel = function() {
    alert("You scrolled!")
}

changeColorButton.onclick = function() {
    text.style.color = "red";
    document.body.style.backgroundColor = "black";
}

allDivs.forEach(singleDiv => {
    singleDiv.onclick = function() {
        alert("Clicked a DIV");
    };
});