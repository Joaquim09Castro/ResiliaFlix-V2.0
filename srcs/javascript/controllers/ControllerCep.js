class ControllerCep {
  constructor() {
    throw new Error(" Class without instancies");
  }

  static getAdress(urlZip) {
    const requestZip = new XMLHttpRequest();
    requestZip.open("GET", urlZip);

    requestZip.addEventListener("load", () => {
      if (requestZip.status != 200) {
        ViewCep.displayErrorStatus();
      }
      const requestZipObj = JSON.parse(requestZip.responseText);

      const completeAdress = new ModelCep(
        requestZipObj.logradouro,
        requestZipObj.complemento,
        requestZipObj.localidade,
        requestZipObj.uf,
        requestZipObj.bairro
      );
      
      if (requestZipObj.logradouro == undefined) {
        zipCodeCheck.innerHTML = ViewCep.displayError(requestZipObj);
        ViewCep.displayAdress(requestZipObj);
      } else ViewCep.displayAdress(completeAdress.returnZip());
    });

    requestZip.send();
  }
}
