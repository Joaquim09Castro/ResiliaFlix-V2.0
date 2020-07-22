class BuscaController {
  constructor() {
    throw new Error('No instance');
  }

  static searchMovie(movieName) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${buscaInfo.url}&s=${movieName}`);

    xhr.onload = () => {
      const responseJson = JSON.parse(xhr.responseText);
      
      //const totalResults = responseJson.totalResults;
      responseJson.Search.forEach((movie)=> {
        let busca = new BuscaModel(movie);
        let elementoBusca = new BuscaView(document.getElementById("search-results-container"));
        elementoBusca.update(busca.movie);
        console.log(busca);
      });

    };

    xhr.send();

  }

}