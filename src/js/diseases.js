import diseases from '../json/diseases.json';
import readyDiseasesMarkup from '../templates/diseases.hbs';
import readyModalMarkup from '../templates/modal.hbs';
import onOpenModal from './modal';

const diseasesMarkupItemsEl = document.querySelector('.js-diseases');
const descriptionMarkupItemsEl = document.querySelector('.js-modal');

const diseasesMarkup = readyDiseasesMarkup(diseases);
diseasesMarkupItemsEl.insertAdjacentHTML('beforeend', diseasesMarkup);


diseasesMarkupItemsEl.addEventListener('click', getMovieById);

async function getMovieById(e) {
  try {
    descriptionMarkupItemsEl.innerHTML = '';
     console.log(e.target.id)
  const ex = diseases.find(des => 
    des.id === e.target.id ? des.description : '')
  console.log(ex)
  onOpenModal();
  const descriptionMarkup = readyModalMarkup([ex]);
descriptionMarkupItemsEl.insertAdjacentHTML('beforeend', descriptionMarkup);
  } catch {
    console.log(error)
  }
}

console.log(diseases)