var mosha = 8;
if (mosha < 8) {
    document.write("Your child is to young to be enlisted for this programming course.");
} else if(mosha > 18) {
    document.write("Your too old to be enlisted for this programming course.");
} else {
    document.write("You have successfully been enrolled your child for this course. We will contact you for further information via Call.");
}

var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("text_id");

button.onclick = function() {
    text.innerHTML = input.value;
}

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var calcBtn = document.getElementById("resultBtn");
var resultText = document.getElementById("resultText");
var ch1 = document.getElementById("theMainH1");

function mbledhje(n1, n2) {
    var barazimi = resultText.innerHTML = Number(n1.value) + Number(n2.value);
    
    if (barazimi > 10) {
        ch1.innerHTML = "Result is greater than 10";
    } else if (barazimi < 10) {
        ch1.innerHTML = "Result is less than 10";
    } else {
        ch1.innerHTML = "Result is equal to 10";
    }

}

calcBtn.onclick = function() {
    mbledhje(num1, num2);
};
