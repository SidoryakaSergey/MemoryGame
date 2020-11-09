import './style.css';
import imgCover from './img/cover.png';
import imgN1 from './img/sisigami.png';

const fliper = document.querySelector('.flipper');

fliper.addEventListener('click', (e) => {
  console.log(e.target);
  e.target.style.transform = 'rotateY(180deg)';
});
