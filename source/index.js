import './style/style.scss';
import bodymovin from './Bodymovin Planet Animation/bodymovin.js';
import './greensock-js/src/uncompressed/TweenMax';

var tl = new TimelineMax({ repeat: -1, yoyo: true });
var zoom = "out";

var planetAnimation = bodymovin.loadAnimation({
    container: document.getElementById('bodymovin-moon'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './Bodymovin Planet Animation/planet_animation.json'
})

var arm = document.getElementById('alienRArm');
var hand = document.getElementById('alienRHand');
var allSVG = document.getElementById('all-svgs');

tl.to(arm, 5, { rotation: '+=90', transformOrigin: "80% 10%" }, 3)
    .to(hand, 4, { rotation: '+=90', transformOrigin: "30% 10%", ease: Power1.easeInOut }, '-=4')

function zoomInOut() {
    const progress = this.tween ? this.tween.progress() : 1;
    const duration = 5 * progress;
    console.log("dur " + duration);

    switch (zoom) {
        case "out": {
            this.tween = TweenLite.to(allSVG, duration, { scale: 3, transformOrigin: "25% 64%", ease: Linear.easeNone })
            zoom = "in";
            break;
        }
        case "in": {
            this.tween = TweenLite.to(allSVG, duration, { scale: 1, transformOrigin: "25% 64%", ease: Linear.easeNone })
            zoom = "out";
            break;
        }
    }
}

document.getElementById("container-tv-inner").addEventListener('click', zoomInOut)
tl.timeScale(2)