class SearchController {
  constructor() {
    throw new Error('No instance');
  }

  static searchMovie(movieName) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${searchInfo.url}&s=${movieName}`);

    xhr.onload = () => {
      const responseJson = JSON.parse(xhr.responseText);

      responseJson.Search.forEach((movie)=> {
        let search = new SearchModel(movie);
        if (search.poster == "N/A") search._poster = "srcs/assets/logo.PNG";

        let resultDisplayer = new SearchView(searchInfo.resultsContainer);

        console.log(movie);
        resultDisplayer.update(search);
      });

    };

    xhr.send();

  }

}