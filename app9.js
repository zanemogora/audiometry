let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("auto_auticko");
const babika_div = document.getElementById("zajac_zajacik");
const babika_spi_div = document.getElementById("dom_domcek");

//const playbutton_div = document.getElementById("playbutton3");
const play_btn = document.getElementById("playbtn");

var score = localStorage.getItem("userscore");
var score2 = localStorage.getItem("computerscore");
userScore_span.innerHTML = score;
computerScore_span.innerHTML = score2;



//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["auto_auticko_sound","zajac_zajacik_sound","dom_domcek_sound"];
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

    window.location.replace('vyhra9.html');

    
}

//prehra
function lose(userChoice, computerChoice){
    
    score2++;
    userScore_span.innerHTML = score;
    computerScore_span.innerHTML = score2;
    localStorage.setItem("userscore", score);
    localStorage.setItem("computerscore", score2);
    
    window.location.replace('prehra9.html');

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "auto_autickoauto_auticko_sound":
            case "zajac_zajacikzajac_zajacik_sound":
            case "dom_domcekdom_domcek_sound":
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
       if (computerChoice == 'auto_auticko_sound') {
            var audio = new Audio('audio/2a_auto_autíčko.wav');
            audio.play();
       }

       if (computerChoice == 'zajac_zajacik_sound') {
            var audio = new Audio('audio/15_zajac_zajačik.wav');
            audio.play();
       }

       if (computerChoice == 'dom_domcek_sound') {
            var audio = new Audio('audio/33_dom_domček.wav');
            audio.play();
       }

    })


    babika_place_div.addEventListener('click', function() {
        game("auto_auticko", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("zajac_zajacik", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("dom_domcek", computerChoice);
    })
 
}

main();