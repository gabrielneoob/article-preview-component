let icon = document.querySelector('.icon-share-img');
let shareWrapper = document.querySelector('.container-js');
icon.addEventListener('click', (() => {
  shareWrapper.classList.toggle('active');
  icon.classList.toggle('a');
}));

const h1 = document.getElementsByTagName('h1')[0];
