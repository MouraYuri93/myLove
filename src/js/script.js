const optionYes = document.getElementById('option-yes');
const optionNo = document.getElementById('option-no');
const heartContainer = document.querySelector('.heart-container');
const heart = document.querySelector('.heart');
const buttonWidth = optionNo.offsetWidth;
const buttonHeight = optionNo.offsetHeight;
const heartRadius = heart.offsetWidth / 2;
const heartCenterX = heartContainer.offsetWidth / 2;
const heartCenterY = heartContainer.offsetHeight / 2;

optionNo.addEventListener('mouseover', () => {
  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * heartRadius * 0.8; // Ajuste a porcentagem para controlar a distância do botão
  const translateX = Math.cos(angle) * distance;
  const translateY = Math.sin(angle) * distance;
  optionNo.style.transform = `translate(${translateX}px, ${translateY}px)`;
});

optionYes.addEventListener('click', () => {
  window.location.href = 'https://www.youtube.com/watch?v=c5IP8amXS-Y';
});
