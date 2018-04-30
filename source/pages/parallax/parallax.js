import 'normalize.css';
import './parallax.scss';

const paralaxContainer = document.getElementById('parallax');
const layers = paralaxContainer.children;

const moveLayers = e => {
  const initialX = (window.innerWidth / 2) - e.pageX; 
  const initialY = (window.innerHeight / 2) - e.pageY; 

  [].slice.call(layers).forEach((layer, i) => {
    const divider = i / 100;
    const positionX = initialX * divider;
    const positionY = initialY * divider;
    const image = layer.firstElementChild;
    const bottomPosition = (window.innerHeight / 2) * divider;
    // const rightPosition = (window.innerWidth / 2) * divider;


    let transformString = `translate(${positionX}px, ${positionY}px)`;

    layer.style.transform = transformString;
    image.style.bottom = `-${bottomPosition}px`;
    // image.style.right = `-${rightPosition}px`;
    // image.style.left = `-${rightPosition}px`;

  });
};

window.addEventListener('mousemove', moveLayers);
