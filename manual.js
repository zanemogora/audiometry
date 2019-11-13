
const play_btn = document.getElementById("playbtn");

//akcie pri kliknuti na obrazky
function main(){
   
    playbtn.addEventListener('click', function() {
            var audio = new Audio('audio/1000Hz.wav');
            audio.play();
    })
}

main();