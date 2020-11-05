import './style.css';
import img from './img/spider.jpg';
console.log(img);

const myimg = document.createElement('div');
myimg.style.background = `url(${img}) no-repeat`;
myimg.style.width = '200px';
myimg.style.height = '180px';

const wraper = document.querySelector('#wraper');
wraper.append(myimg);
myimg.addEventListener('click', (e) => {
  console.log(e);

  myimg.style.transform = 'rotate(0.5)';
});
