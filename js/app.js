var ChangeScreen = false;
var AudioActivated = false;
var currentVideo = document.getElementById('videoShowed')
var carousel = 'img/carousel_kyoko'
CarouselControl(carousel)

function ChangeVideo(pName) {
  let backgroundVideo = document.getElementById("backgroundvideo");
  let video = document.getElementById("videoShowed");
  backgroundVideo.setAttribute("src", `video/${pName}.mp4`);
  changeRoute(`/img/carousel_${pName}`)
  AssignAnimation(video);
  CarouselControl(carousel)
}

function AssignAnimation(pVideo) {
  let clone = pVideo.cloneNode(true);
  pVideo.parentNode.replaceChild(clone, pVideo);
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
    PADRE_CARROUSEL.innerHTML = ""
    let carousel_inner = document.createElement('div');
    carousel_inner.setAttribute('class', 'carousel-inner');
    let carousel_item;
    let img;
    let array = ['','First', 'Second', 'Third']
    for(let i = 1; i <= 3; i++){
    carousel_item = document.createElement('div');
    carousel_item.setAttribute('class', 'carousel-item active');
    img = document.createElement('img')
    img.setAttribute('alt', `${array[i]} slide`)
    img.setAttribute('src', `${pRuta}/${i}.jpg`)
    img.setAttribute('class', `carousel-img`)
    carousel_item.appendChild(img)
    carousel_inner.appendChild(carousel_item)
  }
  
  let a = document.createElement('a')
  let span = document.createElement('span')
  a.setAttribute('class', 'carousel-control-prev')
  a.setAttribute('href', '#carouselExampleControls')
  a.setAttribute('role', 'button')
  a.setAttribute('data-bs-slide', 'prev')
  span.setAttribute('class', 'carousel-control-prev-icon')
  span.setAttribute('aria-hidden', 'true')
  a.appendChild(span)
  

  span = document.createElement('span')
  span.setAttribute('class', 'sr-only')
  a.append(span)

/////////////////////////////////////////////////////////////////

  let b = document.createElement('a')
  span = document.createElement('span')
  b.setAttribute('class', 'carousel-control-next')
  b.setAttribute('href', '#carouselExampleControls')
  b.setAttribute('role', 'button')
  b.setAttribute('data-bs-slide', 'next')
  span.setAttribute('class', 'carousel-control-next-icon')
  span.setAttribute('aria-hidden', 'true')
  b.appendChild(span)
  
  span = document.createElement('span')
  span.setAttribute('class', 'sr-only')
  
  b.appendChild(span)

  carousel_inner.appendChild(a)
  carousel_inner.appendChild(b)

  PADRE_CARROUSEL.appendChild(carousel_inner);
  
}
