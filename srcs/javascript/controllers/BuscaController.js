class BuscaController {
  constructor() {
    throw new Error('No instance');
  }

  static searchMovie(urlApi, movieName) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${urlApi}&s=${movieName}`);

    xhr.onload = () => {
      const responseJson = JSON.parse(xhr.responseText);
      
      const totalResults = responseJson.totalResults;
      console.log(totalResults);

      let indexCount = 0;
      responseJson.Search.forEach((movie)=> {
        let busca = new BuscaModel(movie);

        console.log(busca.title);
        console.log(indexCount);
        
        indexCount += 1;
      });

    };

    xhr.send();

  }

}