// import oweifnwoiefnw
import './style/style.scss';
import wef from './Bodymovin Planet Animation/bodymovin.js';



console.log("HELLO TEST TEST");

var animation = bodymovin.loadAnimation ({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './Bodymovin Planet Animation/planet_animation.json'
  })