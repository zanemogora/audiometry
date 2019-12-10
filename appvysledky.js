
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");

var score = localStorage.getItem("userscore");
var score2 = localStorage.getItem("computerscore");
userScore_span.innerHTML = score;
computerScore_span.innerHTML = score2;

localStorage.clear();



function main(){
}


main();