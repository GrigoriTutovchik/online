let slideIndex = 0;
const slides = document.getElementsByClassName('slide');
const totalSlides = slides.length;

function showSlides() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].classList.remove('active');
  }
  slideIndex++;
  if (slideIndex > totalSlides) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add('active');
  setTimeout(showSlides, 5000); // Замените 5000 на время, через которое вы хотите, чтобы слайды менялись (в миллисекундах)
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > totalSlides) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = totalSlides;
  }
  for (let i = 0; i < totalSlides; i++) {
    slides[i].classList.remove('active');
  }
  slides[slideIndex - 1].classList.add('active');
}

showSlides();