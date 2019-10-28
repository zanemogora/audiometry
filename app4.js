let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const modre_auto_div = document.getElementById("modre_auto");
const bicykel_div = document.getElementById("bicykel");
const lietadlo_lietadielko_div = document.getElementById("lietadlo_lietadielko");
const autobus_div = document.getElementById("autobus");
//const playbutton_div = document.getElementById("playbutton3");
const play_btn = document.getElementById("playbtn");

var score = localStorage.getItem("userscore");
var score2 = localStorage.getItem("computerscore");
userScore_span.innerHTML = score;
computerScore_span.innerHTML = score2;


//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["modre_auto_sound","bicykel_sound","lietadlo_lietadielko_sound", "autobus_sound"];
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
    /*userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    /*result_p.innerHTML = "Správna odpoveď. Vyhrali ste!";
    var audio = new Audio('audio/winsound.mp3');
    audio.play();  */ 
}

//prehra
function lose(userChoice, computerChoice){
    
    score2++;
    userScore_span.innerHTML = score;
    computerScore_span.innerHTML = score2;
    localStorage.setItem("userscore", score);
    localStorage.setItem("computerscore", score2);
    
    
    /*computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    /*result_p.innerHTML = "Nesprávna odpoveď. Prehrali ste!";   
    var audio = new Audio('audio/losesound.mp3');
    audio.play();  */
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "modre_automodre_auto_sound":
            case "bicykelbicykel_sound":
            case "lietadlo_lietadielkolietadlo_lietadielko_sound":
            case "autobusautobus_sound":
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
    
    play_btn.addEventListener('click', function() {
       if (computerChoice == 'modre_auto_sound') {
            var audio = new Audio('audio/26_modré auto.wav');
            audio.play();
       }

       if (computerChoice == 'bicykel_sound') {
            var audio = new Audio('audio/1_bicykel.wav');
            audio.play();
       }

       if (computerChoice == 'lietadlo_lietadielko_sound') {
            var audio = new Audio('audio/3_lietadlo_lietadielko.wav');
            audio.play();
       }

       if (computerChoice == 'autobus_sound') {
            var audio = new Audio('audio/5_autobus.wav');
            audio.play();
       }
    })


    modre_auto_div.addEventListener('click', function() {
        game("modre_auto", computerChoice);
    })

    bicykel_div.addEventListener('click', function() {
        game("bicykel", computerChoice);
    })

    lietadlo_lietadielko_div.addEventListener('click', function() {
        game("lietadlo_lietadielko", computerChoice);
    })

    autobus_div.addEventListener('click', function() {
        game("autobus", computerChoice);
    })

    
}

main();