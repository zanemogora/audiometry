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
const back_btn = document.getElementById("inner1");

//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_prve_user = localStorage.getItem("userscore");
var score_prve_computer = localStorage.getItem("computerscore");
console.log("User:Computer prve kolo =>" + score_prve_user,score_prve_computer);

//kvoli dalsiemu inkrementovaniu score
var score5 = localStorage.getItem("userscore2");
var score6 = localStorage.getItem("computerscore2");
console.log("User:Computer druhe kolo =>" + score5,score6);
userScore_span.innerHTML = score5;
computerScore_span.innerHTML = score6;


//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["vlak_vlacik_sound","vtak_vtacik_sound"];
    const randomNumber = Math.floor(Math.random() * 2);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score5++;
    userScore_span.innerHTML = score5;
    computerScore_span.innerHTML = score6;
    localStorage.setItem("userscore3", score5);
    localStorage.setItem("computerscore3", score6);

    window.location.replace('vyhra3.html');


}

//prehra
function lose(userChoice, computerChoice){
    
    score6++;
    userScore_span.innerHTML = score5;
    computerScore_span.innerHTML = score6;
    localStorage.setItem("userscore3", score5);
    localStorage.setItem("computerscore3", score6);
    
    window.location.replace('prehra3.html');

    
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
    
    back_btn.addEventListener('click', function() {
        console.log("STLACIL SI BACK");
        
        if (score5 > score_prve_user) {
            score5--;
            localStorage.setItem("userscore", score5);
        }

        if (score6 > score_prve_computer) {
            score6--;
            localStorage.setItem("computerscore", score6);
        }

        
    })

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