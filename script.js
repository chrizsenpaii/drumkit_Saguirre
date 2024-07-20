let randomNumber1 = Math.floor(Math.random()* 6) + 1;
let randomNumber2 = Math.floor(Math.random()* 6) + 1;
console.log(randomNumber1);
document.getElementById("img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.getElementById("img2").setAttribute("src","images/dice"+randomNumber2+".png");
winner(randomNumber1,randomNumber2);
function winner(number1,number2){
    if(number1 > number2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if( number1 < number2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else if(number1 == number2){
        document.querySelector("h1").innerHTML = "It's a Tie!";
    }
}