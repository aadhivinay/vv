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
// Function to show the greeting pop-up
function showGreetingPopup() {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <p>Hey ✌️ Welcome To My Page .. </p>
    <button class="close-button">Close</button>
  `;
  document.body.appendChild(popup);
  const closeButton = popup.querySelector('.close-button');
  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}
