class BuscaController {
  constructor() {
    throw new Error('No instance');
  }

  static searchMovie(movieName) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${buscaInfo.url}&s=${movieName}`);

    xhr.onload = () => {
      const responseJson = JSON.parse(xhr.responseText);
      
      const totalResults = responseJson.totalResults;
      console.log(totalResults);

      let indexCount = 0;
      responseJson.Search.forEach((movie)=> {
        let busca = new BuscaModel(movie);

        console.log(busca.movie);
        console.log(indexCount);
        
        indexCount += 1;
      });

    };

    xhr.send();

  }

}