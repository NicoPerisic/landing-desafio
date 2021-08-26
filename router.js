import { tank } from '../templates/tanks.js';
import { healer } from '../templates/healers.js';
import { dps } from '../templates/dps.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#/':
      containerRoot.appendChild(tank());
      break;
    case '#/healer':
      containerRoot.appendChild(healer());
      break;
    case '#/dps':
      containerRoot.appendChild(dps());
      break;
    default:
      containerRoot.innerHTML = 'ERROR';
      break;
  }
};

export const showRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  }
  if (hash === '#/healer') {
    return showTemplate(hash);
  }
  if (hash === '#/dps') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};

// Cambia página frente a cambio de #

window.addEventListener(
  'hashchange',
  () => {
    showRoute(window.location.hash);
  },
  false
);