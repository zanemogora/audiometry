let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const cervene_auto_div = document.getElementById("strom_stromcek");
const cervena_div = document.getElementById("mys_myska");
const jablko_jablcko_div = document.getElementById("postel_postielka");
const kvet_kvietok_div = document.getElementById("banan_bananik");

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
    const choices =["strom_stromcek_sound","mys_myska_sound","postel_postielka_sound", "banan_bananik_sound"];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score9++;
    userScore_span.innerHTML = score9;
    computerScore_span.innerHTML = score10;
    localStorage.setItem("userscore5", score9);
    localStorage.setItem("computerscore5", score10);

    window.location.replace('vyhra15.html');

}

//prehra
function lose(userChoice, computerChoice){

    score10++;
    userScore_span.innerHTML = score9;
    computerScore_span.innerHTML = score10;
    localStorage.setItem("userscore5", score9);
    localStorage.setItem("computerscore5", score10);
  
    window.location.replace('prehra15.html');

}


//logika hry
function game(userChoice, computerChoice){    
    
    //console.log("pouzivatel vybral =>" + userChoice);
    //console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
            case "strom_stromcekstrom_stromcek_sound":
            case "mys_myskamys_myska_sound":
            case "postel_postielkapostel_postielka_sound":
            case "banan_bananikbanan_bananik_sound":
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

    playbtn.addEventListener('click', function() {
       if (computerChoice == 'strom_stromcek_sound') {
            var audio = new Audio('audio/38_strom_stromček.wav');
            audio.play();
       }

       if (computerChoice == 'mys_myska_sound') {
            var audio = new Audio('audio/19_myš_myška.wav');
            audio.play();
       }

       if (computerChoice == 'postel_postielka_sound') {
            var audio = new Audio('audio/39_posteľ_postieľka.wav');
            audio.play();
       }

       if (computerChoice == 'banan_bananik_sound') {
            var audio = new Audio('audio/47_banán_banánik.wav');
            audio.play();
       }
    })


    cervene_auto_div.addEventListener('click', function() {
        game("strom_stromcek", computerChoice);
    })

    cervena_div.addEventListener('click', function() {
        game("'mys_myska", computerChoice);
    })

    jablko_jablcko_div.addEventListener('click', function() {
        game("postel_postielka", computerChoice);
    })

    kvet_kvietok_div.addEventListener('click', function() {
        game("banan_bananik", computerChoice);
    }) 
}

main();