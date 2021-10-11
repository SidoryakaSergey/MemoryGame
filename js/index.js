console.log('OK');
const imgCover = new Image(200, 200);
imgCover.src = '/img/cover.png';
const imgN1 = new Image(200, 200);
imgN1.src = '/img/card1.png';

const fliper = document.querySelectorAll('.flipper');
const cover = document.createElement('div');
const img1 = document.createElement('div');
const wrap = document.getElementById('wraper');

console.log(fliper);

cover.classList.add('card');
cover.style.backgroundImage = `url(${imgCover.src})`;
cover.style.backgroundSize = 'cover';
cover.style.transition = '1s';

img1.classList.add('card');
img1.style.background = `url(${imgN1.src})`;
img1.style.backgroundSize = 'cover';
img1.style.transition = '1s';
img1.style.transform = 'rotateY(180deg)';

fliper[0].append(cover);
fliper[0].append(img1);

let flip = true;

fliper[0].addEventListener('click', (e) => {
  if (flip) {
    cover.style.transform = 'rotateY(180deg)';
    img1.style.transform = 'rotateY(360deg)';
    flip = !flip;
  } else {
    cover.style.transform = 'none';
    img1.style.transform = 'rotateY(180deg)';
    flip = !flip;
  }
});
