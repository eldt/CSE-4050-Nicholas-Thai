alert("Script.js has loaded.");
//variable assigned through id tags in html code
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var multiplier = document.getElementById("multi");

//Determines when code activates, in this case when an input is achieved.
numOne.addEventListener("input",mult);
numTwo.addEventListener("input",mult);

//class to multiply values from input fields.
function mult(){
    //variables take the values from input fields
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    //multiplication is carried out.
    var multiplied = one * two;
    //multiplied value is then assigned to multiplier html text field.
    multiplier.innerHTML = "Values multiplied equals: " + multiplied;
}