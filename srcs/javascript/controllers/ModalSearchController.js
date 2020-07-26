class ModalSearchController {
  constructor() {
    throw new Error("This class has no instance");
  }

  static search(movie) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${modalInfo.url}&s=${movie.value}`);
    movie.value = "";

    xhr.onload = () => {
      let responseJson = JSON.parse(xhr.responseText);
      console.log(responseJson);

      xhr.open("GET", `${modalInfo.url}&i=${responseJson.Search[0].imdbID}`);

      xhr.onload = () => {
        responseJson = JSON.parse(xhr.responseText);
        let responseModel = new ModalSearchModel(responseJson);
        console.log(responseModel.data.poster);

        let modalDislpay = new ModalSearchView(modalInfo.modal);
        modalDislpay.update(responseModel.data);
      };

      xhr.send();
    };

    xhr.send();
  }
}