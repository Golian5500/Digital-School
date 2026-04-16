var cars = ['Volve', 'BMW', 'AUDI', 'FORD', 'MAZDA', 'TOYOTA'];
var text = '';
text += cars[0] + '<br>';
text += cars[1] + '<br>';
text += cars[2] + '<br>';
text += cars[3] + '<br>';
text += cars[4] + '<br>';
text += cars[5] + '<br>';
document.getElementById('forLoop1').innerHTML = text;
var text = '';
for (let i=0;i<cars.length;i++) {
    text += cars[i] + '<br>';
    document.getElementById('forLoop2').innerHTML = text;
}var text = '';
for (let element in cars) {
    text += cars[element] + '<br>';
    document.getElementById('forLoop3').innerHTML = text;
}var text = '';
for (let car of cars) {
    text += car + '<br>';
    document.getElementById('forLoop4').innerHTML = text;
}var text = '';
for (let x=0;x<5;x++){
    text += `The number is ${x} <br>`;
    document.getElementById('forLoop5').innerHTML = text;
}


console.log(text);