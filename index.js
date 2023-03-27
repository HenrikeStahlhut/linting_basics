const cards = document.querySelectorAll('[data-js=card]');
// const buttons = document.querySelectorAll('[data-js=buttons]');

cards.forEach(() => {
  const button = document.querySelector('[data-js="button"]');
  const link = document.querySelector('[data-js="link"]');
  const arrow = document.querySelector('[data-js="arrow"]');

  button.addEventListener('click', () => {
    link.classList.toggle('hide');
    arrow.classList.toggle('rotate');
  });
});
