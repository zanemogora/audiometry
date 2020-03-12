
const play_btn = document.getElementById("playbtn");

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
   
    playbtn.addEventListener('click', function() {
            var audio = new Audio('audio/1000Hz.wav');
            audio.play();
            if (!audio.paused || audio.currentTime) {
                console.log("block");
                document.getElementById("playbtn").disabled = true;
            } else if (audio.paused) {
                console.log("unblock");

                document.getElementById("playbtn").disabled = false;
            }
            playFunc(audio, 1);
            
    })
    
}

main();