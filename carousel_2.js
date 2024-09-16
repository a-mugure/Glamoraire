// Get the carousel container
const carousel = document.querySelector('.carousel');

// Get the carousel items
const carouselItems = carousel.querySelectorAll('.carousel-item');

// Add navigation buttons
const prevButton = document.createElement('button');
prevButton.textContent = 'Previous';
carousel.appendChild(prevButton);

const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
carousel.appendChild(nextButton);

// Add event listeners to the navigation buttons
prevButton.addEventListener('click', () => {
  // Show the previous slide
  const currentSlide = carousel.querySelector('.carousel-item.active');
  const prevSlide = currentSlide.previousElementSibling;
  if (prevSlide) {
    currentSlide.classList.remove('active');
    prevSlide.classList.add('active');
  }
});

nextButton.addEventListener('click', () => {
  // Show the next slide
  const currentSlide = carousel.querySelector('.carousel-item.active');
  const nextSlide = currentSlide.nextElementSibling;
  if (nextSlide) {
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
  }
});

// Add a slideshow effect
setInterval(() => {
  const currentSlide = carousel.querySelector('.carousel-item.active');
  const nextSlide = currentSlide.nextElementSibling;
  if (nextSlide) {
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
  } else {
    carouselItems[0].classList.add('active');
  }
}, 5000);