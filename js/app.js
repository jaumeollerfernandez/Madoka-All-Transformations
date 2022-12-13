var ChangeScreen = false;


function ChangeVideo(pName){
    let backgroundVideo = document.getElementById('backgroundvideo');
    let video = document.getElementById('videoShowed');
    backgroundVideo.setAttribute('src',`video/${pName}.mp4`);
    AssignAnimation(video);
}

function AssignAnimation(pVideo){
    let clone = pVideo.cloneNode(true);
    pVideo.parentNode.replaceChild(clone, pVideo);
    // clone.load();
}

function PauseVideo(){
    let currentVideo = document.getElementById('videoShowed');
    currentVideo.pause();
}

function PlayVideo(){
    let currentVideo = document.getElementById('videoShowed');
    currentVideo.play();
}

function FullScreen(pChanging){
    let currentVideo = document.getElementById('videoShowed');
    if(pChanging == false){
        currentVideo.setAttribute('class', 'back-video fullscreen');
        pChanging = true;
    }else{
        currentVideo.setAttribute('class', 'back-video');
    }
}