let progress = document.querySelector(".progress");
let controlIcon = document.querySelector(".controlIcon")
let songs = document.querySelector(".songs")

songs.onloadedmetadata = function (){
    progress.max = songs.duration;
    progress.value = songs.currentTime;
}



function playpause(){
    if (controlIcon.classList.contains("fa-pause")){
        songs.pause();
        controlIcon.classList.add("fa-play");
        controlIcon.classList.remove("fa-pause");
        

    }
    else {
        songs.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");

    }

}



if (songs.play()){
    setInterval(() => {
        progress.max = songs.duration;
        progress.value = songs.currentTime;
        
    }, 500);
}

progress.onchange = function (){
    songs.play();
    songs.currentTime = progress.value;
     controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
        
     
    
}