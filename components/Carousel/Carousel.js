/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.append(createCarousel());

function createCarousel() {
  // Create elements
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const mountainsImg = document.createElement('img');
  const computerImg = document.createElement('img');
  const treesImg = document.createElement('img');
  const turntableImg = document.createElement('img');
  const rightButton = document.createElement('div');

  // Add classes
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  // Add content
  leftButton.textContent = '<';
  mountainsImg.src = './assets/carousel/mountains.jpeg';
  computerImg.src = './assets/carousel/computer.jpeg';
  treesImg.src = './assets/carousel/trees.jpeg';
  turntableImg.src = './assets/carousel/turntable.jpeg';
  rightButton.textContent = '>';

  // Add Styles
  mountainsImg.style.display = 'block';

  // Add event listeners
  const imgArray = [mountainsImg, computerImg, treesImg, turntableImg];
  let currentImg = 0;

  leftButton.addEventListener('click', () => {
    imgArray[currentImg].style.display = 'none';
    // If not on the last image of array
    if (currentImg + 1 < imgArray.length) {
      imgArray[currentImg + 1].style.display = 'block';
      currentImg += 1;
    }
    // If on last image of array
    else {
      imgArray[0].style.display = 'block';
      currentImg = 0;
    }
  });

  rightButton.addEventListener('click', () => {
    imgArray[currentImg].style.display = 'none';
    // If not on the last image of array
    if (currentImg !== 0) {
      imgArray[currentImg - 1].style.display = 'block';
      currentImg -= 1;
    }
    // If on last image of array
    else {
      currentImg = imgArray.length - 1;
      imgArray[currentImg].style.display = 'block';
    }
  });

  // Append elements
  carousel.append(leftButton, mountainsImg, computerImg, treesImg, turntableImg, rightButton);

  return carousel;
}