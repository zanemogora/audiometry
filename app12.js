let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("sova_sovicka");
const babika_div = document.getElementById("pes_psik_havo");
const babika_spi_div = document.getElementById("noha");

//const playbutton_div = document.getElementById("playbutton3");
const play_btn = document.getElementById("playbtn");

var score = localStorage.getItem("userscore");
var score2 = localStorage.getItem("computerscore");
userScore_span.innerHTML = score;
computerScore_span.innerHTML = score2;



//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["sova_sovicka_sound","pes_psik_havo_sound","noha_sound"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score++;
    userScore_span.innerHTML = score;
    computerScore_span.innerHTML = score2;
    localStorage.setItem("userscore", score);
    localStorage.setItem("computerscore", score2);

    window.location.replace('vyhra12.html');

    
}

//prehra
function lose(userChoice, computerChoice){
    
    score2++;
    userScore_span.innerHTML = score;
    computerScore_span.innerHTML = score2;
    localStorage.setItem("userscore", score);
    localStorage.setItem("computerscore", score2);
    
    window.location.replace('prehra12.html');

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "sova_sovickasova_sovicka_sound":
            case "pes_psik_havopes_psik_havo_sound":
            case "nohanoha_sound":
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
       if (computerChoice == 'sova_sovicka_sound') {
            var audio = new Audio('audio/18_sova_sovička.wav');
            audio.play();
       }

       if (computerChoice == 'pes_psik_havo_sound') {
            var audio = new Audio('audio/11a_pes_psík_havo.wav');
            audio.play();
       }

       if (computerChoice == 'noha_sound') {
            var audio = new Audio('audio/43_noha.wav');
            audio.play();
       }

    })


    babika_place_div.addEventListener('click', function() {
        game("sova_sovicka", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("pes_psik_havo", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("noha", computerChoice);
    })
 
}

main();