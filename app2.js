let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const pes_psik_havo_div = document.getElementById("pes_psik_havo");
const macka_a_pes_div = document.getElementById("macka_a_pes");
const macka_a_konik_div = document.getElementById("macka_a_konik");
const macka_macicka_div = document.getElementById("macka_macicka");
//const playbutton_div = document.getElementById("playbutton3");
const play_btn = document.getElementById("playbtn");

//kvoli dalsiemu inkrementovaniu score
var score3 = localStorage.getItem("userscore");
var score4 = localStorage.getItem("computerscore");
userScore_span.innerHTML = score3;
computerScore_span.innerHTML = score4;


//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["pes_psik_havo_sound","macka_a_pes_sound","macka_a_konik_sound", "macka_macicka_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){

    score3++;
    userScore_span.innerHTML = score3;
    computerScore_span.innerHTML = score4;
    localStorage.setItem("userscore2", score3);
    localStorage.setItem("computerscore2", score4);

    window.location.replace('vyhra2.html');

      
}

//prehra
function lose(userChoice, computerChoice){

   
    score4++;
    userScore_span.innerHTML = score3;
    computerScore_span.innerHTML = score4;
    localStorage.setItem("userscore2", score3);
    localStorage.setItem("computerscore2", score4);

    window.location.replace('prehra2.html');

}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "pes_psik_havopes_psik_havo_sound":
            case "macka_a_pesmacka_a_pes_sound":
            case "macka_a_konikmacka_a_konik_sound":
            case "macka_macickamacka_macicka_sound":
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
       if (computerChoice == 'pes_psik_havo_sound') {
            var audio = new Audio('audio/11a_pes_psík_havo.wav');
            audio.play();
       }

       if (computerChoice == 'macka_a_pes_sound') {
            var audio = new Audio('audio/30_mačka a pes.wav');
            audio.play();
       }

       if (computerChoice == 'macka_a_konik_sound') {
            var audio = new Audio('audio/32_mačka a koník.wav');
            audio.play();
       }

       if (computerChoice == 'macka_macicka_sound') {
            var audio = new Audio('audio/10_mačka_mačička.wav');
            audio.play();
       }
})


    pes_psik_havo_div.addEventListener('click', function() {
        game("pes_psik_havo", computerChoice);
    })

    macka_a_pes_div.addEventListener('click', function() {
        game("macka_a_pes", computerChoice);
    })

    macka_a_konik_div.addEventListener('click', function() {
        game("macka_a_konik", computerChoice);
    })

    macka_macicka_div.addEventListener('click', function() {
        game("macka_macicka", computerChoice);
    })

    
}

main();