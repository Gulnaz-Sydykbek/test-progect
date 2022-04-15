import contraindications from '../json/contraindications.json';
import readyContraindicationsMarkup from '../templates/contraindications.hbs';

const contraindicationsMarkupItemsEl = document.querySelector('.js-contraindications');

const contraindicationsMarkup = readyContraindicationsMarkup(contraindications);
contraindicationsMarkupItemsEl.insertAdjacentHTML('beforeend', contraindicationsMarkup);