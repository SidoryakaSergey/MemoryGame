import './style.css';
import imgCover from './img/cover.png';
import imgN1 from './img/sisigami.png';

const fliper = document.querySelector('.flipper');
const cover = document.createElement('div');
const img1 = document.createElement('div');

cover.classList.add('card');
cover.style.background = `url(${imgCover})`;
cover.style.backgroundSize = 'cover';
cover.style.transition = '1s';

img1.classList.add('card');
img1.style.background = `url(${imgN1})`;
img1.style.backgroundSize = 'cover';
img1.style.transition = '1s';
img1.style.transform = 'rotateY(180deg)';

fliper.append(cover);
fliper.append(img1);

let flip = true;

fliper.addEventListener('click', (e) => {
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
