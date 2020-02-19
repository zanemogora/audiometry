let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const cervene_auto_div = document.getElementById("cervene_auto");
const cervena_div = document.getElementById("cervena");
const jablko_jablcko_div = document.getElementById("jablko_jablcko");
const kvet_kvietok_div = document.getElementById("kvet_kvietok");

const play_btn = document.getElementById("playbtn");

var score = 0;
var score2 = 0;


//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["cervene_auto_sound","cervena_sound","jablko_jablcko_sound", "kvet_kvietok_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score++;
    userScore_span.innerHTML = score;
    computerScore_span.innerHTML = score2;
    localStorage.setItem("userscore", score);
    localStorage.setItem("computerscore", score2);

    window.location.replace('vyhra.html');



}

//prehra
function lose(userChoice, computerChoice){

    score2++;
    userScore_span.innerHTML = score;
    computerScore_span.innerHTML = score2;
    localStorage.setItem("userscore", score);
    localStorage.setItem("computerscore", score2);
  
    window.location.replace('prehra.html');

}



//logika hry
function game(userChoice, computerChoice){    
    
    //console.log("pouzivatel vybral =>" + userChoice);
    //console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
            case "cervene_autocervene_auto_sound":
            case "cervenacervena_sound":
            case "jablko_jablckojablko_jablcko_sound":
            case "kvet_kvietokkvet_kvietok_sound":
                win(userChoice, computerChoice);
                break;

            default:
                lose(userChoice, computerChoice);
                break;
    }

}

//akcie pri kliknuti na obrazky
function main(){
    const computerChoice=getComputerChoice();
    console.log("Computer choice =>" + computerChoice);

//funguje mi to tak ze vygenerujem premennu computerChoice o nejakej hodnote a drzim hodnotu aj pri zmene vstupu pouzivatela, este mi treba if (generovanahodnota) then zapni konkretny zvuk 
    
    playbtn.addEventListener('click', function() {
       if (computerChoice == 'cervene_auto_sound') {
            var audio = new Audio('audio/28_červené auto.wav');
            audio.play();
       }

       if (computerChoice == 'cervena_sound') {
            var audio = new Audio('audio/6_červená.wav');
            audio.play();
       }

       if (computerChoice == 'jablko_jablcko_sound') {
            var audio = new Audio('audio/46_jablko_jabĺčko.wav');
            audio.play();
       }

       if (computerChoice == 'kvet_kvietok_sound') {
            var audio = new Audio('audio/37_kvietok.wav');
            audio.play();
       }
    })


    cervene_auto_div.addEventListener('click', function() {
        game("cervene_auto", computerChoice);
    })

    cervena_div.addEventListener('click', function() {
        game("cervena", computerChoice);
    })

    jablko_jablcko_div.addEventListener('click', function() {
        game("jablko_jablcko", computerChoice);
    })

    kvet_kvietok_div.addEventListener('click', function() {
        game("kvet_kvietok", computerChoice);
    }) 
}

main();