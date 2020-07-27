class CarouselModalController {
  constructor() {
    throw new Error("This class has no instance");
  }

  static search(id) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${modalInfo.url}&i=${id}`);
    xhr.onload = () => {
      let responseJson = JSON.parse(xhr.responseText);
      let responseModel = new ModalSearchModel(responseJson);
      let responseView = new ModalSearchView(carouselInfo.carouselModal);
      responseView.update(responseModel.data);
    };
    xhr.send();
  }
}