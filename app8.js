let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("auto_auticko");
const babika_div = document.getElementById("vlak_vlacik");
const babika_spi_div = document.getElementById("banan_bananik");

const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");

//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_prve_user = localStorage.getItem("userscore");
var score_prve_computer = localStorage.getItem("computerscore");
console.log("User:Computer prve kolo =>" + score_prve_user,score_prve_computer);

//kvoli dalsiemu inkrementovaniu score
var score14 = localStorage.getItem("userscore2");
var score15 = localStorage.getItem("computerscore2");
console.log("User:Computer druhe kolo =>" + score14,score15);
userScore_span.innerHTML = score14;
computerScore_span.innerHTML = score15;


//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["auto_auticko_sound","vlak_vlacik_sound","banan_bananik_sound"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score14++;
    userScore_span.innerHTML = score14;
    computerScore_span.innerHTML = score15;
    localStorage.setItem("userscore3", score14);
    localStorage.setItem("computerscore3", score15);

    window.location.replace('vyhra8.html');

    
}

//prehra
function lose(userChoice, computerChoice){
    
    score15++;
    userScore_span.innerHTML = score14;
    computerScore_span.innerHTML = score15;
    localStorage.setItem("userscore3", score14);
    localStorage.setItem("computerscore3", score15);
    
    window.location.replace('prehra8.html');

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "auto_autickoauto_auticko_sound":
            case "vlak_vlacikvlak_vlacik_sound":
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
    
    play_btn.addEventListener('click', function() {
       if (computerChoice == 'auto_auticko_sound') {
            var audio = new Audio('audio/2a_auto_autíčko.wav');
            audio.play();
       }

       if (computerChoice == 'vlak_vlacik_sound') {
            var audio = new Audio('audio/4_vlak_vláčik.wav');
            audio.play();
       }

       if (computerChoice == 'banan_bananik_sound') {
            var audio = new Audio('audio/47_banán_banánik.wav');
            audio.play();
       }

    })


    babika_place_div.addEventListener('click', function() {
        game("auto_auticko", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("vlak_vlacik", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("banan_bananik", computerChoice);
    })
 
}

main();