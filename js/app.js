// Header Slider 
const next = document.querySelector('#header-next'),
      prev = document.querySelector('#header-prev')

const headerSliderContainer = document.querySelector('.header-slider-container'),
      headerSlider = document.querySelector('.header-wraper'),
      headerSlides = headerSlider.querySelectorAll('.header-slide')

let counter = 1,
  inteval
changeSlide()
slideInterval()

next.addEventListener('click' , () => {
  clearInterval(inteval)
  slideInterval()
  if(counter >= headerSlides.length-1) return
  headerSlider.style.transition = 'transform 0.4s ease-out'
  counter++
  changeSlide()
})

prev.addEventListener('click' , () => {
  clearInterval(inteval)
  slideInterval()
  if(counter <= 0) return
  headerSlider.style.transition = 'transform 0.4s ease-out'
  counter--
  changeSlide()
})

headerSlider.addEventListener('transitionend' , ()=> {
  if(headerSlides[counter].id === 'headerLastClone'){
    headerSlider.style.transition = 'none'
    counter = headerSlides.length - 2
    changeSlide() 
  }
  if(headerSlides[counter].id === 'headerFirstClone'){
    headerSlider.style.transition = 'none'
    counter = headerSlides.length - counter
    changeSlide() 
  }
})

function changeSlide() {
  headerSlider.style.transform = 
  `translateX(${counter * headerSliderContainer.offsetWidth}px)`
}

function slideInterval() {
  inteval = setInterval(() => {
  next.click()
}, 5000);
}



