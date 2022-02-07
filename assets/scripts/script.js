let icon = document.querySelector('.icon-share-img');
let shareWrapper = document.querySelector('.container-js');
let shareIcon = document.querySelector('.icon-share-img');
icon.addEventListener('click', (() => {
  shareWrapper.classList.toggle('active');
  if(shareIcon.childNodes[1].classList.contains('a')) {
    shareIcon.childNodes[1].classList.remove('a');
  } else {
    shareIcon.childNodes[1].classList.add('a')
  }
  icon.classList.toggle('bg-dark')
}));

const h1 = document.getElementsByTagName('h1')[0];
