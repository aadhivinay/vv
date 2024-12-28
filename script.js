// script.js

function moveCarousel(direction, carouselClass) {
  const cardContainer = document.querySelector(`.${carouselClass}`);
  const cards = cardContainer.querySelectorAll('.card');
  const totalSlides = cards.length;
  
 

  let currentSlide = parseInt(cardContainer.dataset.currentSlide) || 0;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Update translateX value based on screen size
  if (window.innerWidth >= 768) {
    // Desktop view: translate based on percentage
    cardContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  } else {
    // Mobile view: translate based on pixels
    const cardWidth = cards[0].offsetWidth + 20; // Adjusted for card width and margin
    cardContainer.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
  }
  

  cardContainer.dataset.currentSlide = currentSlide;
}

