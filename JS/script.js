alert("Script.js has loaded.");
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var multiplier = document.getElementById("multi");

numOne.addEventListener("input",mult);
numTwo.addEventListener("input",mult);

function mult(){
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    var multiplied = one * two;
    multiplier.innerHTML = "Values multiplied equals: " + multiplied;
}