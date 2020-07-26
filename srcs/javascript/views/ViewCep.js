class ViewCep {

  constructor() {

    throw new Error(" Class without instancies");
  }

  static displayAdress(ZipObj) {

    const streetView = document.querySelector("#street");
    const numberView = document.querySelector("#complement");
    const cityView = document.querySelector("#city");
    const stateView = document.querySelector("#state");
    const districtView = document.querySelector("#district");

    streetView.value = ZipObj.street;
    numberView.value = ZipObj.complement;
    cityView.value = ZipObj.city;
    stateView.value = ZipObj.state;
    districtView.value = ZipObj.district;


  }


}

