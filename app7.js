let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const modre_auto_div = document.getElementById("lopta_lopticka");
const bicykel_div = document.getElementById("ruka");
const lietadlo_lietadielko_div = document.getElementById("kon_konik");
const autobus_div = document.getElementById("kvet_kvietok");

const play_btn = document.getElementById("playbtn");

var score = localStorage.getItem("userscore");
var score2 = localStorage.getItem("computerscore");
userScore_span.innerHTML = score;
computerScore_span.innerHTML = score2;



//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["lopta_lopticka_sound","ruka_sound","kon_konik_sound", "kvet_kvietok_sound"];
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

    window.location.replace('vyhra7.html');

    
}

//prehra
function lose(userChoice, computerChoice){
    
    score2++;
    userScore_span.innerHTML = score;
    computerScore_span.innerHTML = score2;
    localStorage.setItem("userscore", score);
    localStorage.setItem("computerscore", score2);
    
    window.location.replace('prehra7.html');

    
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "lopta_loptickalopta_lopticka_sound":
            case "rukaruka_sound":
            case "kon_konikkon_konik_sound":
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
    
    play_btn.addEventListener('click', function() {
       if (computerChoice == 'lopta_lopticka_sound') {
            var audio = new Audio('audio/36_lopta_loptička.wav');
            audio.play();
       }

       if (computerChoice == 'ruka_sound') {
            var audio = new Audio('audio/42a_ruka.wav');
            audio.play();
       }

       if (computerChoice == 'kon_konik_sound') {
            var audio = new Audio('audio/17_kôň_koník.wav');
            audio.play();
       }

       if (computerChoice == 'kvet_kvietok_sound') {
            var audio = new Audio('audio/37_kvietok.wav');
            audio.play();
       }
    })


    modre_auto_div.addEventListener('click', function() {
        game("lopta_lopticka", computerChoice);
    })

    bicykel_div.addEventListener('click', function() {
        game("ruka", computerChoice);
    })

    lietadlo_lietadielko_div.addEventListener('click', function() {
        game("kon_konik", computerChoice);
    })

    autobus_div.addEventListener('click', function() {
        game("kvet_kvietok", computerChoice);
    })

    
}

main();