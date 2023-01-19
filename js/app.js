var ChangeScreen = false;
var AudioActivated = false;
var currentVideo = document.getElementById('videoShowed')
var carousel = 'img/carousel_madoka'

function ChangeVideo(pName) {
  let backgroundVideo = document.getElementById("backgroundvideo");
  let video = document.getElementById("videoShowed");
  backgroundVideo.setAttribute("src", `video/${pName}.mp4`);
  AssignAnimation(video);
}

function AssignAnimation(pVideo) {
  let clone = pVideo.cloneNode(true);
  pVideo.parentNode.replaceChild(clone, pVideo);
  // clone.load();
}

function PauseVideo() {
  let currentVideo = document.getElementById("videoShowed");
  currentVideo.pause();
}

function PlayVideo() {
  let currentVideo = document.getElementById("videoShowed");
  currentVideo.play();
}

function FullScreen(pChanging) {
  let currentVideo = document.getElementById("videoShowed");
  if (pChanging == false) {
    currentVideo.setAttribute("class", "back-video fullscreen");
    ChangeScreen = true;
  } else {
    currentVideo.setAttribute("class", "back-video");
    ChangeScreen = false;
  }
}

function Audio(){
    let currentVideo = document.getElementById('videoShowed');
    if(AudioActivated == false){
        currentVideo.muted = false;
        AudioActivated = true;
    }else{
        currentVideo.muted = true;
        AudioActivated = false;
    }
}

function changeRoute(pRoute){
    carousel = pRoute
}

function CarouselControl(pRuta){


    let PADRE_CARROUSEL = document.getElementById('carouselExampleControls')
    PADRE_CARROUSEL.innerHTML = ''
    let carousel_inner = document.createElement('div');
    carousel_inner.setAttribute('class', 'carousel-inner');
    let carousel_item;
    let img;
    let array = ['First', 'Second', 'Third']
    for(let i = 0; i< 2; i++){
    carousel_item = document.createElement('div');
    carousel_item.setAttribute('class', 'carousel-item active');
    img = document.createElement('img')
    img.setAttribute('alt', `${array[i]} slide`)
    img.setAttribute('src', `${pRuta}/${i}.jpg`)
    carousel_item.appendChild(img)
    carousel_inner.appendChild(carousel_item)
    }

    PADRE_CARROUSEL.appendChild(carousel_inner);

    




//     <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img class="" src="img/chara1_img.png" alt="First slide">
//     </div>
//     <div class="carousel-item">
//       <img class="" src="img/chara2_img.png" alt="Second slide">
//     </div>
//     <div class="carousel-item">
//       <img class="" src="img/chara3_img.png" alt="Third slide">
//     </div>
//   </div>
}
