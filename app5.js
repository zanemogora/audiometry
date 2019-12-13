let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("babika_place");
const babika_div = document.getElementById("babika");
const babika_spi_div = document.getElementById("babika_spi");

//const playbutton_div = document.getElementById("playbutton3");
const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");

//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_tretie_user = localStorage.getItem("userscore3");
var score_tretie_computer = localStorage.getItem("computerscore3");
console.log("User:Computer tretie kolo =>" + score_tretie_user,score_tretie_computer);

//kvoli dalsiemu inkrementovaniu score
var score9 = localStorage.getItem("userscore4");
var score10 = localStorage.getItem("computerscore4");
console.log("User:Computer stvrte kolo =>" + score9,score10);
userScore_span.innerHTML = score9;
computerScore_span.innerHTML = score10;

//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["babika_place_sound","babika_sound","babika_spi_sound"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score9++;
    userScore_span.innerHTML = score9;
    computerScore_span.innerHTML = score10;
    localStorage.setItem("userscore5", score9);
    localStorage.setItem("computerscore5", score10);

    window.location.replace('vyhra5.html');

   
}

//prehra
function lose(userChoice, computerChoice){
    
    score10++;
    userScore_span.innerHTML = score9;
    computerScore_span.innerHTML = score10;
    localStorage.setItem("userscore5", score9);
    localStorage.setItem("computerscore5", score10);
    
    window.location.replace('prehra5.html');

    
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "babika_placebabika_place_sound":
            case "babikababika_sound":
            case "babika_spibabika_spi_sound":
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
    
    back_btn.addEventListener('click', function() {
        console.log("STLACIL SI BACK");
        
        if (score9 > score_tretie_user) {
            score9--;
            localStorage.setItem("userscore5", score9);
        }

        if (score10 > score_tretie_computer) {
            score10--;
            localStorage.setItem("computerscore5", score10);
        }

        
    })


    play_btn.addEventListener('click', function() {
       if (computerChoice == 'babika_place_sound') {
            var audio = new Audio('audio/25_bábika plače.wav');
            audio.play();
       }

       if (computerChoice == 'babika_sound') {
            var audio = new Audio('audio/34_bábika.wav');
            audio.play();
       }

       if (computerChoice == 'babika_spi_sound') {
            var audio = new Audio('audio/24_bábika spí.wav');
            audio.play();
       }

    })


    babika_place_div.addEventListener('click', function() {
        game("babika_place", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("babika", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("babika_spi", computerChoice);
    })
 
}

main();