let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() =>{
    nextDom.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() =>{
        nextDom.click();
    }, timeAutoNext)
}

 // for scroll reveal //

 window.addEventListener('scroll', reveal);

 function reveal(){
 var reveals = document.querySelectorAll('.reveal');

 for(var i = 0; i < reveals.length; i++){

     var windowheight = window.innerHeight;
     var revealtop = reveals[i].getBoundingClientRect().top;
     var revealpoint = 50;

     if(revealtop < windowheight - revealpoint){
         reveals[i].classList.add('active');
     }
     else{
         reveals[i].classList.remove('active');
     }
 }
}

// for modal //
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const overlay = document.querySelector('overlay');

openBtn.addEventListener("click", () => {
    console.log("Opening modal");
    modal.classList.add("open");
    overlay.style.display = 'block';
})

closeBtn.addEventListener("click", () => {
    console.log("Closing modal");
    modal.classList.remove("open");
    overlay.style.display = 'none';
})
overlay.addEventListener('click', () => {
    modal.classList.remove("open");
    overlay.style.display = 'none';
})
