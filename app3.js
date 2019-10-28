let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const vlak_vlacik_div = document.getElementById("vlak_vlacik");
const vtak_vtacik_div = document.getElementById("vtak_vtacik");
//const playbutton_div = document.getElementById("playbutton3");
const play_btn = document.getElementById("playbtn");

var score = localStorage.getItem("userscore");
var score2 = localStorage.getItem("computerscore");
userScore_span.innerHTML = score;
computerScore_span.innerHTML = score2;

//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["vlak_vlacik_sound","vtak_vtacik_sound"];
    const randomNumber = Math.floor(Math.random() * 2);
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
    audio.play();   */
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
    audio.play(); */ 
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "vlak_vlacikvlak_vlacik_sound":
            case "vtak_vtacikvtak_vtacik_sound":
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
       if (computerChoice == 'vlak_vlacik_sound') {
            var audio = new Audio('audio/4_vlak_vláčik.wav');
            audio.play();
       }

       if (computerChoice == 'vtak_vtacik_sound') {
            var audio = new Audio('audio/14_vták_vtáčik.wav');
            audio.play();
       }
    })


    vlak_vlacik_div.addEventListener('click', function() {
        game("vlak_vlacik", computerChoice);
    })

    vtak_vtacik_div.addEventListener('click', function() {
        game("vtak_vtacik", computerChoice);
    })

}

main();