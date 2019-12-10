let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const modre_auto_div = document.getElementById("macka_macicka");
const bicykel_div = document.getElementById("ruka");
const lietadlo_lietadielko_div = document.getElementById("kvet_kvietok");
const autobus_div = document.getElementById("dzus_dzusik");

const play_btn = document.getElementById("playbtn");

localStorage.clear();

var score = localStorage.getItem("userscore");
var score2 = localStorage.getItem("computerscore");
userScore_span.innerHTML = score;
computerScore_span.innerHTML = score2;



//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["macka_macicka_sound","ruka_sound","kvet_kvietok_sound", "dzus_dzusik_sound"];
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

    window.location.replace('vyhra6.html');

    
}

//prehra
function lose(userChoice, computerChoice){
    
    score2++;
    userScore_span.innerHTML = score;
    computerScore_span.innerHTML = score2;
    localStorage.setItem("userscore", score);
    localStorage.setItem("computerscore", score2);
    
    window.location.replace('prehra6.html');

    
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "macka_macickamacka_macicka_sound":
            case "rukaruka_sound":
            case "kvet_kvietokkvet_kvietok_sound":
            case "dzus_dzusikdzus_dzusik_sound":
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
       if (computerChoice == 'macka_macicka_sound') {
            var audio = new Audio('audio/10_mačka_mačička.wav');
            audio.play();
       }

       if (computerChoice == 'ruka_sound') {
            var audio = new Audio('audio/42a_ruka.wav');
            audio.play();
       }

       if (computerChoice == 'kvet_kvietok_sound') {
            var audio = new Audio('audio/37_kvietok.wav');
            audio.play();
       }

       if (computerChoice == 'dzus_dzusik_sound') {
            var audio = new Audio('audio/49b_džús_džúsik.wav');
            audio.play();
       }
    })


    modre_auto_div.addEventListener('click', function() {
        game("macka_macicka", computerChoice);
    })

    bicykel_div.addEventListener('click', function() {
        game("ruka", computerChoice);
    })

    lietadlo_lietadielko_div.addEventListener('click', function() {
        game("kvet_kvietok", computerChoice);
    })

    autobus_div.addEventListener('click', function() {
        game("dzus_dzusik", computerChoice);
    })

    
}

main();