class ViewCep {

  constructor() {

    throw new Error(" Class without instancies");
  }

  static displayAdress(ZipObj) {

    let streetView = document.querySelector("#street");
    let numberView = document.querySelector("#complement");
    let cityView = document.querySelector("#city");
    let stateView = document.querySelector("#state");
    let districtView = document.querySelector("#district");

    streetView.value = ZipObj.street;
    numberView.value = ZipObj.complement;
    cityView.value = ZipObj.city;
    stateView.value = ZipObj.state;
    districtView.value = ZipObj.district;


  }


}

