(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-btn]'),
    closeModalBtn: document.querySelector('[data-modal-close-btn]'),
    modal: document.querySelector('[data-modal-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden-btn');
  }
})();