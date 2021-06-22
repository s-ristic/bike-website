// testimonial slider

const slides = document.querySelectorAll('.testimonial__sliderSlide');
const prevBtn = document.querySelector('.testimonial__headlineBtnsPrev');
const nextBtn = document.querySelector('.testimonial__headlineBtnsNext');

let index = 0;

prevBtn.addEventListener('click', () => {
  if (index == 0) index = slides.length - 1;
  else index--;

  slides[0].style.marginLeft = `-${index * 100}%`;
});

nextBtn.addEventListener('click', () => {
  if (index == slides.length - 1) index = 0;
  else index++;

  slides[0].style.marginLeft = `-${index * 100}%`;
});

// tab navigation

const tabsMenu = document.querySelector('.tabs__menu');

tabsMenu.addEventListener('click', (e) =>
  e.target.parentElement.classList.toggle('tabs__menuTab--active')
);

// forms submit

const forms = document.querySelectorAll('form');

forms.forEach((form) =>
  form.addEventListener('submit', (e) => e.preventDefault())
);

// small devices - open navigation

const menuBtn = document.querySelector('.header__menuBtn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
});

nav.addEventListener('click', (e) => {
  if (e.target.attributes[0].name === 'href') nav.classList.remove('menu-open');
});
