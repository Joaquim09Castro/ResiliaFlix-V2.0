const searchInfo = {
  url: "https://www.omdbapi.com/?apikey=aedc9fba&type=movie",
  searchForm: document.querySelector("#search-form"),
  searchInput: document.querySelector("#search-input"),
  searchBtn: document.querySelector("#search-btn"),
  resultsContainer: document.getElementById("search-results-container"),
  cardList: undefined
};

searchInfo.searchForm.onsubmit = (event) => {
  event.preventDefault();
  search();
};

searchInfo.searchBtn.onclick = () => search();

const search = () => {
  if (searchInfo.searchInput.value != "") {
    searchInfo.resultsContainer.innerHTML = "";
    SearchController.searchMovie(searchInfo.searchInput.value);
    searchInfo.searchInput.value = "";
  } else {
    alert("Enter a movie name");
  }
};

searchInfo.resultsContainer.addEventListener("click", (e) => {
  SearchPageController.search(e.target.id);
  console.log(e.target.id);
});