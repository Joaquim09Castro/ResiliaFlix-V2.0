class ModalSearchView {
  constructor(element) {
    this._element = element;
  }

  template(model) {
    return `
        <div class="resultArea d-flex justify-content-center p-md-1 m-md-1">
          <img class="poster p-3" id="poster" src="${model.poster}">
          <div class="memberSearch m-md-3 p-md-3">
            <h3 class="mb-5" id="title"><b>${model.title}</b></h3>
            <p id="year"><b>YEAR</b>: ${model.year}</p>
            <p id="director"><b>DIRECTOR</b>: ${model.director}</p>
            <p id="runtime"><b>RUNTIME</b>: ${model.runtime}</p>
            <p id="rating"><b>RATING</b>: ${model.rating}</p>
            <p id="release"><b>RELEASE DATE</b>: ${model.release}</p>
            <p id="synopsis"><b>SYNOPSIS</b>: ${model.plot}</p>
          </div>
        </div>
    `;
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
}