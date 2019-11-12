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

var score = localStorage.getItem("userscore");
var score2 = localStorage.getItem("computerscore");
userScore_span.innerHTML = score;
computerScore_span.innerHTML = score2;



//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["babika_place_sound","babika_sound","babika_spi_sound"];
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

    window.location.replace('vyhra5.html');

    /*userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    /*result_p.innerHTML = "Správna odpoveď. Vyhrali ste!";
    var audio = new Audio('audio/winsound.mp3');
    audio.play();   */
}

//prehra
function lose(userChoice, computerChoice){
    
    score2++;
    userScore_span.innerHTML = score;
    computerScore_span.innerHTML = score2;
    localStorage.setItem("userscore", score);
    localStorage.setItem("computerscore", score2);
    
    window.location.replace('prehra5.html');

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