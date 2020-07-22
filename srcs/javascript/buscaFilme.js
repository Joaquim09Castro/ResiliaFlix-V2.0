const buscaInfo = {
  url: "http://www.omdbapi.com/?i=tt3896198&apikey=aedc9fba&type=movie",
  formularioBusca: document.querySelector("#search-form"),
  buscaInput: document.querySelector("#movie-search"),
  buscaBtn: document.querySelector("#search-btn"),
  resultContainer: document.querySelector("#search-results-container")
};

buscaInfo.formularioBusca.onsubmit = (event) => {
  event.preventDefault();
  BuscaController.searchMovie(buscaInfo.buscaInput.value);
  buscaInfo.buscaInput.value = "";
};

buscaInfo.buscaBtn.onclick = () => {
  BuscaController.searchMovie(buscaInfo.buscaInput.value);
  buscaInfo.buscaInput.value = "";
};