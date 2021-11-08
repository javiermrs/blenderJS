let stateBlender = "off";
let blenderSound = document.getElementById("blender-sound");
let blenderButton = document.getElementById("blender-button-sound");
let blender = document.getElementById("blender");

function controlBlender(){
    if(stateBlender == "off"){
        stateBlender = "on";
        blender.classList.add("active");
        blenderSounds();
    }
    else {
        stateBlender = "off";
        blender.classList.remove("active");
        blenderSounds();
    }
    
}

function blenderSounds(){

    if(blenderSound.paused){
        blenderButton.play();
        blenderSound.play();
    }
    else {
        blenderButton.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }

}