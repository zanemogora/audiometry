let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("postel_postielka");
const babika_div = document.getElementById("nos");
const babika_spi_div = document.getElementById("kvet_kvietok");

const play_btn = document.getElementById("playbtn");

//kvoli dalsiemu inkrementovaniu score
var score32 = localStorage.getItem("userscore16");
var score33 = localStorage.getItem("computerscore16");
userScore_span.innerHTML = score32;
computerScore_span.innerHTML = score33;



//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["postel_postielka_sound","nos_sound","kvet_kvietok_sound"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score32++;
    userScore_span.innerHTML = score32;
    computerScore_span.innerHTML = score33;
    localStorage.setItem("userscore17", score32);
    localStorage.setItem("computerscore17", score33);

    window.location.replace('vyhra17.html');

    
}

//prehra
function lose(userChoice, computerChoice){
    
    score33++;
    userScore_span.innerHTML = score32;
    computerScore_span.innerHTML = score33;
    localStorage.setItem("userscore17", score32);
    localStorage.setItem("computerscore17", score33);
    
    window.location.replace('prehra17.html');

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "postel_postielkapostel_postielka_sound":
            case "nosnos_sound":
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
       if (computerChoice == 'postel_postielka_sound') {
            var audio = new Audio('audio/39_posteľ_postieľka.wav');
            audio.play();
       }

       if (computerChoice == 'nos_sound') {
            var audio = new Audio('audio/45_nos.wav');
            audio.play();
       }

       if (computerChoice == 'kvet_kvietok_sound') {
            var audio = new Audio('audio/37_kvietok.wav');
            audio.play();
       }

    })


    babika_place_div.addEventListener('click', function() {
        game("postel_postielka", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("nos", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("kvet_kvietok", computerChoice);
    })
 
}

main();