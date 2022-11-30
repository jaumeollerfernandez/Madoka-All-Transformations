
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