let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const cervene_auto_div = document.getElementById("sova_sovicka");
const cervena_div = document.getElementById("vlak_vlacik");
const jablko_jablcko_div = document.getElementById("nos");
const kvet_kvietok_div = document.getElementById("kvet_kvietok");

const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");

//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_druhe_user = localStorage.getItem("userscore2");
var score_druhe_computer = localStorage.getItem("computerscore2");
console.log("User:Computer druhe kolo =>" + score_druhe_user,score_druhe_computer);

//kvoli dalsiemu inkrementovaniu score
var score36 = localStorage.getItem("userscore3");
var score37 = localStorage.getItem("computerscore3");
console.log("User:Computer tretie kolo =>" + score36,score37);
userScore_span.innerHTML = score36;
computerScore_span.innerHTML = score37;

//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["sova_sovicka_sound","vlak_vlacik_sound","nos_sound", "kvet_kvietok_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score36++;
    userScore_span.innerHTML = score36;
    computerScore_span.innerHTML = score37;
    localStorage.setItem("userscore4", score36);
    localStorage.setItem("computerscore4", score37);

    window.location.replace('vyhra19.html');

}

//prehra
function lose(userChoice, computerChoice){

    score37++;
    userScore_span.innerHTML = score36;
    computerScore_span.innerHTML = score37;
    localStorage.setItem("userscore4", score36);
    localStorage.setItem("computerscore4", score37);
  
    window.location.replace('prehra19.html');

}


//logika hry
function game(userChoice, computerChoice){    
    
    //console.log("pouzivatel vybral =>" + userChoice);
    //console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
            case "sova_sovickasova_sovicka_sound":
            case "vlak_vlacikvlak_vlacik_sound":
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
    
    back_btn.addEventListener('click', function() {
        console.log("STLACIL SI BACK");
        
        if (score36 > score_druhe_user) {
            score36--;
            localStorage.setItem("userscore4", score36);
        }

        if (score37 > score_druhe_computer) {
            score37--;
            localStorage.setItem("computerscore4", score37);
        }

        
    })

    playbtn.addEventListener('click', function() {
       if (computerChoice == 'sova_sovicka_sound') {
            var audio = new Audio('audio/18_sova_sovička.wav');
            audio.play();
       }

       if (computerChoice == 'vlak_vlacik_sound') {
            var audio = new Audio('audio/4_vlak_vláčik.wav');
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


    cervene_auto_div.addEventListener('click', function() {
        game("sova_sovicka", computerChoice);
    })

    cervena_div.addEventListener('click', function() {
        game("vlak_vlacik", computerChoice);
    })

    jablko_jablcko_div.addEventListener('click', function() {
        game("nos", computerChoice);
    })

    kvet_kvietok_div.addEventListener('click', function() {
        game("kvet_kvietok", computerChoice);
    }) 
}

main();