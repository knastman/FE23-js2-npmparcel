import anime from 'animejs';
import sunFlowerImgUrl from './media/sf.jpg'

console.log(sunFlowerImgUrl)
const img = document.createElement('img');
document.body.append(img);
// img.src = './media./sf.jpg'
img.src = sunFlowerImgUrl;

anime({
    targets: img,
    rotate: 360
})
