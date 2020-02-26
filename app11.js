let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("auto_auticko");
const babika_div = document.getElementById("medved_maco");
const babika_spi_div = document.getElementById("oci");

//const playbutton_div = document.getElementById("playbutton3");
const play_btn = document.getElementById("playbtn");

var score20 = 0;
var score21 = 0;



//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["auto_auticko_sound","medved_maco_sound","oci_sound"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score20++;
    userScore_span.innerHTML = score20;
    computerScore_span.innerHTML = score21;
    localStorage.setItem("userscore", score20);
    localStorage.setItem("computerscore", score21);

    window.location.replace('vyhra11.html');

    
}

//prehra
function lose(userChoice, computerChoice){
    
    score21++;
    userScore_span.innerHTML = score20;
    computerScore_span.innerHTML = score21;
    localStorage.setItem("userscore", score20);
    localStorage.setItem("computerscore", score21);

    
    window.location.replace('prehra11.html');

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "auto_autickoauto_auticko_sound":
            case "medved_macomedved_maco_sound":
            case "ocioci_sound":
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

       if (computerChoice == 'medved_maco_sound') {
            var audio = new Audio('audio/13_medveď_maco.wav');
            audio.play();
       }

       if (computerChoice == 'oci_sound') {
            var audio = new Audio('audio/41_oči.wav');
            audio.play();
       }

    })


    babika_place_div.addEventListener('click', function() {
        game("auto_auticko", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("medved_maco", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("oci", computerChoice);
    })
 
}

main();