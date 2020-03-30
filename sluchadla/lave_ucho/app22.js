
const userScore_span = document.getElementById("correct-score");
const computerScore_span = document.getElementById("wrong-score");
const score_Board = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

const babika_place_div = document.getElementById("ucho");
const babika_div = document.getElementById("postel_postielka");
const babika_spi_div = document.getElementById("dom_domcek");
const noha_div = document.getElementById("noha");

const play_btn = document.getElementById("playbtn");

//kvoli dalsiemu inkrementovaniu score
var score41 = localStorage.getItem("userscore21");
var score42 = localStorage.getItem("computerscore21");
userScore_span.innerHTML = score41;
computerScore_span.innerHTML = score42;



//Nahodny vyber z nahravok
function getComputerChoice(){
    const choices =["ucho_sound","postel_postielka_sound","dom_domcek_sound", "noha_sound" ];
    const randomNumber = Math.floor(Math.random() * 4);
    return choices[randomNumber];
}

//vyhra
function win(userChoice, computerChoice){
    
    score41++;
    userScore_span.innerHTML = score41;
    computerScore_span.innerHTML = score42;
    localStorage.setItem("userscore22", score41);
    localStorage.setItem("computerscore22", score42);

    window.location.replace('vyhra22.html');

    
}

//prehra
function lose(userChoice, computerChoice){
    
    score42++;
    userScore_span.innerHTML = score41;
    computerScore_span.innerHTML = score42;
    localStorage.setItem("userscore22", score41);
    localStorage.setItem("computerscore22", score42);
    
    window.location.replace('prehra22.html');

   
}

//logika hry
function game(userChoice, computerChoice){    
    
    console.log("pouzivatel vybral =>" + userChoice);
    console.log("pocitac vybral nahravku =>" + computerChoice);
    
    switch (userChoice + computerChoice){
        
        
            case "uchoucho_sound":
            case "postel_postielkapostel_postielka_sound":
            case "dom_domcekdom_domcek_sound":
            case "nohanoha_sound":

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
       if (computerChoice == 'ucho_sound') {
            var audio = new Audio('audio/44_ucho.wav');
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

       if (computerChoice == 'postel_postielka_sound') {
            var audio = new Audio('audio/39_posteľ_postieľka.wav');
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

       if (computerChoice == 'noha_sound') {
        var audio = new Audio('audio/43_noha.wav');
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
        game("ucho", computerChoice);
    })

    babika_div.addEventListener('click', function() {
        game("postel_postielka", computerChoice);
    })

    babika_spi_div.addEventListener('click', function() {
        game("dom_domcek", computerChoice);
    })

    noha_div.addEventListener('click', function() {
        game("noha", computerChoice);
    })
 
}

main();