const searchInfo = {
  url: "http://www.omdbapi.com/?apikey=aedc9fba&type=movie",
  searchForm: document.querySelector("#search-form"),
  searchInput: document.querySelector("#search-input"),
  searchBtn: document.querySelector("#search-btn"),
  resultsContainer: document.getElementById("search-results-container")
};

searchInfo.searchForm.onsubmit = (event) => {
  event.preventDefault();
  if (searchInfo.searchInput.value != "") {
    searchInfo.resultsContainer.innerHTML = "";
    SearchController.searchMovie(searchInfo.searchInput.value);
    searchInfo.searchInput.value = "";
  } else {
    alert("Enter a movie name");
  }
};

searchInfo.searchBtn.onclick = () => {
  if (searchInfo.searchInput.value != "") {
    searchInfo.resultsContainer.innerHTML = "";
    SearchController.searchMovie(searchInfo.searchInput.value);
    searchInfo.searchInput.value = "";
  } else {
    alert("Enter a movie name");
  }
};