import diseases from '../json/diseases.json';
import readyDiseasesMarkup from '../templates/diseases.hbs';

const diseasesMarkupItemsEl = document.querySelector('.js-diseases');

const diseasesMarkup = readyDiseasesMarkup(diseases);
diseasesMarkupItemsEl.insertAdjacentHTML('beforeend', diseasesMarkup);