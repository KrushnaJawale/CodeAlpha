const images = document.querySelectorAll(".gallery img")

const lightbox = document.querySelector(".lightbox")
const lightboxImg = document.querySelector(".lightbox-img")
const closeBtn = document.querySelector(".close")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
const counter = document.querySelector(".counter")

let currentIndex = 0

images.forEach((img,index)=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex"
lightboxImg.src=img.src
currentIndex=index
updateCounter()

})

})

closeBtn.onclick=()=>{
lightbox.style.display="none"
}

function showImage(index){

if(index<0) index=images.length-1
if(index>=images.length) index=0

currentIndex=index
lightboxImg.src=images[currentIndex].src
updateCounter()

}

nextBtn.onclick=()=>showImage(currentIndex+1)
prevBtn.onclick=()=>showImage(currentIndex-1)

function updateCounter(){

counter.innerText=(currentIndex+1)+" / "+images.length

}

/* keyboard navigation */

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display==="flex"){

if(e.key==="ArrowRight") showImage(currentIndex+1)
if(e.key==="ArrowLeft") showImage(currentIndex-1)
if(e.key==="Escape") lightbox.style.display="none"

}

})

/* filter */

function filterImages(category){

const buttons=document.querySelectorAll(".filters button")

buttons.forEach(btn=>btn.classList.remove("active"))

event.target.classList.add("active")

images.forEach(img=>{

if(category==="all" || img.dataset.category===category){

img.style.display="block"

}else{

img.style.display="none"

}

})

  }
