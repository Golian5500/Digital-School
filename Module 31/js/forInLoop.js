var person = {firstName: 'John', lastName: 'Doe', age: 25};
var text = '';
for (x in person) {
    text += person[x] + '<br>';
}
document.getElementById('forInLoop').innerHTML = text;
console.log(text);