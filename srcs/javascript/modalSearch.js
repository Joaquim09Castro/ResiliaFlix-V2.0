const modalInfo = {
  url: "http://www.omdbapi.com/?apikey=aedc9fba&type=movie",
  btnSearch: $("#button-search"),
  searchField: $("#movie-search"),
  modal: $("#modal-body"),
};

modalInfo.btnSearch.onclick = () => {
  if (modalInfo.searchField.value != "") {
    ModalSearchController.search(modalInfo.searchField);
  } else {
    let modalError = new ModalSearchError(modalInfo.modal);
    modalError.update();
  }
};