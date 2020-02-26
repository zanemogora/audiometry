let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("sova_sovicka");
const babika_div = document.getElementById("krava_kravicka");
const babika_spi_div = document.getElementById("noha");

//const playbutton_div = document.getElementById("playbutton3");
const play_btn = document.getElementById("playbtn");

var score30 = 0;
var score31 = 0;



//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["sova_sovicka_sound","krava_kravicka_sound","noha_sound"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score30++;
    userScore_span.innerHTML = score30;
    computerScore_span.innerHTML = score31;
    localStorage.setItem("userscore", score30);
    localStorage.setItem("computerscore", score31);

    window.location.replace('vyhra16.html');

    
}

//prehra
function lose(userChoice, computerChoice){
    
    score31++;
    userScore_span.innerHTML = score30;
    computerScore_span.innerHTML = score31;
    localStorage.setItem("userscore", score30);
    localStorage.setItem("computerscore", score31);

    
    window.location.replace('prehra16.html');

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "sova_sovickasova_sovicka_sound":
            case "krava_kravickakrava_kravicka_sound":
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

       if (computerChoice == 'krava_kravicka_sound') {
            var audio = new Audio('audio/12_krava_kravička.wav');
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
        game("krava_kravicka", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("noha", computerChoice);
    })
 
}

main();