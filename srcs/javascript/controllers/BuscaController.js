class BuscaController {
  constructor() {
    throw new Error('No instance');
  }

  static searchMovie(urlApi, movieName) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${urlApi}&s=${movieName}`);

    xhr.onload = () => {
      console.log(xhr.responseText);
    };
    xhr.send();

  }

}