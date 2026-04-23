let input = document.getElementById('input_id');
let btn = document.getElementById('btn_id');
var text = document.getElementById('text_id');


btn.onclick = function () {
    text.textContent = input.value;
}

input.addEventListener('input', (event) => {
    text.textContent = input.value;
});

var text = 'The Best School in the world is Digital School';
var result = text.search('Digital School');
document.getElementById('result1').textContent = result;

var result = text.search(/Digital School/);
document.getElementById('result2').textContent = result;

var result = text.replace("Digital School", "Another School");
document.getElementById('result3').textContent = result;

text = "abcdef";
var regex = new RegExp('abc');
document.getElementById('result4').textContent = regex.test(text);

text = 'My school is the best school in the world';
regex = /school/g;
document.getElementById('result5').textContent = text.match(regex);


text = 'Digital school is the best school in the world';
regex = /i/g;
document.getElementById('result6').textContent = text.match(regex);

regex = /[abc]/g;
document.getElementById('result7').textContent = text.match(regex);

text = 'Digital school is in the top 10 best school in the world';
regex = /[0-9]/g;
document.getElementById('result8').textContent = text.match(regex);

text = 'My school is the best school in the world';
regex = /(top|best|school)/g;
document.getElementById('result9').textContent = text.match(regex);

text = "100 percent";
regex = /\d/g;
document.getElementById('result10').textContent = text.match(regex);