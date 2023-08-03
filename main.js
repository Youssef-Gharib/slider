let slides = document.querySelectorAll('.my-slide');
let dot = document.querySelectorAll('.dot');


let slideIndex = 1; // => 2
showSlide(slideIndex);





function plusSlides(n) {               //    n = 1  
  showSlide(slideIndex += n);     //slideIndex = 1 + 1 = 2;
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(slideNumber) {   //2

  // if(slideNumber > slides.length) {
  //   slideNumber = slideNumber - slides.length;
  // }
  if (slideNumber > slides.length) {slideIndex = 1}    
  if (slideNumber< 1) {slideIndex = slides.length}

  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for(let i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace('active',"");
  }

  slides[slideIndex-1].style.display = 'block'; 
  dot[slideIndex-1].className += " active"; 
}