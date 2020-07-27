class SearchPageController {
  constructor() {
    throw new Error("This Class Has No Instance");
  }

  static search(id) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${searchInfo.url}&i=${id}`);
    xhr.onload = () => {
      let responseJson = JSON.parse(xhr.responseText);
      let responseModel = new ModalSearchModel(responseJson);
      let modalDisplay = new ModalSearchView(modalInfo.modal);

      console.log(responseModel.data);
      modalDisplay.update(responseModel.data);
    };
    xhr.send();
  }
}