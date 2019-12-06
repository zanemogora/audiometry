let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("strom_stromcek");
const babika_div = document.getElementById("postel_postielka");
const babika_spi_div = document.getElementById("chlieb_chlebik");

//const playbutton_div = document.getElementById("playbutton3");
const play_btn = document.getElementById("playbtn");

var score = localStorage.getItem("userscore");
var score2 = localStorage.getItem("computerscore");
userScore_span.innerHTML = score;
computerScore_span.innerHTML = score2;



//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["strom_stromcek_sound","postel_postielka_sound","chlieb_chlebik_sound"];
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

    window.location.replace('vyhra10.html');

    
}

//prehra
function lose(userChoice, computerChoice){
    
    score2++;
    userScore_span.innerHTML = score;
    computerScore_span.innerHTML = score2;
    localStorage.setItem("userscore", score);
    localStorage.setItem("computerscore", score2);
    
    window.location.replace('prehra10.html');

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "strom_stromcekstrom_stromcek_sound":
            case "postel_postielkapostel_postielka_sound":
            case "chlieb_chlebikchlieb_chlebik_sound":
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
       if (computerChoice == 'strom_stromcek_sound') {
            var audio = new Audio('audio/38_strom_stromček.wav');
            audio.play();
       }

       if (computerChoice == 'postel_postielka_sound') {
            var audio = new Audio('audio/39_posteľ_postieľka.wav');
            audio.play();
       }

       if (computerChoice == 'chlieb_chlebik_sound') {
            var audio = new Audio('audio/48_chlieb_chlebík.wav');
            audio.play();
       }

    })


    babika_place_div.addEventListener('click', function() {
        game("strom_stromcek", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("postel_postielka", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("chlieb_chlebik", computerChoice);
    })
 
}

main();