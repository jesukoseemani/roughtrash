const features = document.querySelector(".featuresField");
const popUp = document.querySelector(".features__popup")
const search = document.querySelector(".search")
const featuresTop = features.offsetTop;

window.addEventListener("scroll", stickyEffect)

function stickyEffect(){
 
  if(window.scrollY >= featuresTop){
    features.classList.add('fixed');
    popUp.style.visibility = "visible"
    search.classList.add('remove')
  }else{
    features.classList.remove('fixed');
    popUp.style.visibility = "hidden"
    search.classList.remove('remove')

  }
}