// $(window).ready(function () {
//     alert('JQuery is ready.');
// });
// $("#button").click(function () {
//     console.log("The test was successful!");
// });
$("#button").click(function () {
    $('div').addClass("clicked");
}).find('span').attr('title', 'Hover over me!');