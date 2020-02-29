let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("auto_auticko");
const babika_div = document.getElementById("zajac_zajacik");
const babika_spi_div = document.getElementById("dom_domcek");

const play_btn = document.getElementById("playbtn");
const back_btn = document.getElementById("inner1");

//kvoli tlacidlu back, aby vedel rozoznat program body v kolach
var score_druhe_user = localStorage.getItem("userscore7");
var score_druhe_computer = localStorage.getItem("computerscore7");
console.log("User:Computer druhe kolo =>" + score_druhe_user,score_druhe_computer);

//kvoli dalsiemu inkrementovaniu score
var score16 = localStorage.getItem("userscore8");
var score17 = localStorage.getItem("computerscore8");
console.log("User:Computer tretie kolo =>" + score16,score17);
userScore_span.innerHTML = score16;
computerScore_span.innerHTML = score17;

//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["auto_auticko_sound","zajac_zajacik_sound","dom_domcek_sound"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score16++;
    userScore_span.innerHTML = score16;
    computerScore_span.innerHTML = score17;
    localStorage.setItem("userscore9", score16);
    localStorage.setItem("computerscore9", score17);

    window.location.replace('vyhra9.html');

    
}

//prehra
function lose(userChoice, computerChoice){
    
    score17++;
    userScore_span.innerHTML = score16;
    computerScore_span.innerHTML = score17;
    localStorage.setItem("userscore9", score16);
    localStorage.setItem("computerscore9", score17);
    
    window.location.replace('prehra9.html');

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "auto_autickoauto_auticko_sound":
            case "zajac_zajacikzajac_zajacik_sound":
            case "dom_domcekdom_domcek_sound":
                win(userChoice, computerChoice);
                break;
            
            default:
                lose(userChoice, computerChoice);
                break;
        
    }

}

function playFunc(target, RepeatCount) {
    playbtn.disabled=true;
     var soundFunc = function(){
        RepeatCount--;
        target.currentTime = 0;
        if (RepeatCount>0)
            target.play();
        else{
           target.removeEventListener('ended', soundFunc);
            playbtn.disabled=false;
        }
    
    }
    target.addEventListener('ended', soundFunc)
    target.play();
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
            if (!audio.paused || audio.currentTime) {
                console.log("block");
                document.getElementById("playbtn").disabled = true;
            } else if (audio.paused) {
                console.log("unblock");

                document.getElementById("playbtn").disabled = false;
            }
            playFunc(audio, 1);
       }

       if (computerChoice == 'zajac_zajacik_sound') {
            var audio = new Audio('audio/15_zajac_zajačik.wav');
            audio.play();
            if (!audio.paused || audio.currentTime) {
                console.log("block");
                document.getElementById("playbtn").disabled = true;
            } else if (audio.paused) {
                console.log("unblock");

                document.getElementById("playbtn").disabled = false;
            }
            playFunc(audio, 1);
       }

       if (computerChoice == 'dom_domcek_sound') {
            var audio = new Audio('audio/33_dom_domček.wav');
            audio.play();
            if (!audio.paused || audio.currentTime) {
                console.log("block");
                document.getElementById("playbtn").disabled = true;
            } else if (audio.paused) {
                console.log("unblock");

                document.getElementById("playbtn").disabled = false;
            }
            playFunc(audio, 1);
       }

    })


    babika_place_div.addEventListener('click', function() {
        game("auto_auticko", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("zajac_zajacik", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("dom_domcek", computerChoice);
    })
 
}

main();