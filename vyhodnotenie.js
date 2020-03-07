const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");

var score9 = localStorage.getItem("userscore5");
var score10 = localStorage.getItem("computerscore5");
userScore_span.innerHTML = score9;
computerScore_span.innerHTML = score10;





const userScore_span2 = document.getElementById("correct-score2");
const computerScore_span2 = document.getElementById("wrong-score2");

var score19 = localStorage.getItem("userscore10");
var score20 = localStorage.getItem("computerscore10");
userScore_span2.innerHTML = score19;
computerScore_span2.innerHTML = score20;





const userScore_span3 = document.getElementById("correct-score3");
const computerScore_span3 = document.getElementById("wrong-score3");

var score28 = localStorage.getItem("userscore15");
var score29 = localStorage.getItem("computerscore15");
userScore_span3.innerHTML = score28;
computerScore_span3.innerHTML = score29;





const userScore_span4 = document.getElementById("correct-score4");
const computerScore_span4 = document.getElementById("wrong-score4");

var score38 = localStorage.getItem("userscore20");
var score39 = localStorage.getItem("computerscore20");
userScore_span4.innerHTML = score38;
computerScore_span4.innerHTML = score39;





const userScore_span5 = document.getElementById("correct-score5");
const computerScore_span5 = document.getElementById("wrong-score5");

var score48 = localStorage.getItem("userscore25");
var score49 = localStorage.getItem("computerscore25");
userScore_span5.innerHTML = score48;
computerScore_span5.innerHTML = score49;





const userScore_span6 = document.getElementById("correct-score6");
const computerScore_span6 = document.getElementById("wrong-score6");

var score58 = parseInt(score9) + parseInt(score19) + parseInt(score28) + parseInt(score38);
var score59 = parseInt(score10) + parseInt(score20) + parseInt(score29) + parseInt(score39);
userScore_span6.innerHTML = score58;
computerScore_span6.innerHTML = score59;




function myFunction(){

    if (parseInt(score58) > 15) {
        document.getElementById("demo").innerHTML = "Máte výborný sluch.(16-20 správnych odpovedí) ಠ‿↼";
        

    }else if (parseInt(score58) < 16 && parseInt(score58) > 10){
        document.getElementById("demo2").innerHTML = "Váš sluch je v poriadku.(11-15 správnych odpovedí) ʘ‿ʘ";

    }else {
        document.getElementById("demo3").innerHTML = "Váš sluch nie je v dobrej kondícii.(0-10 správnych odpovedí) ಠ~ಠ";

    }

}


function main(){
    myFunction();
}


main();