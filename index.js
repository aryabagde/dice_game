var randomNumber1 = Math.floor((Math.random() * 6)) + 1
// we can usee Math.floor and Math.ceil in this condition but ceil gives us the next nearest integer whereas floor gives use previosu
//if we are using ceil then no need to use +1 otherwise the output may contain upto 7 outputs
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0]; //just to remember different ways possible
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor((Math.random() * 6)) + 1
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}