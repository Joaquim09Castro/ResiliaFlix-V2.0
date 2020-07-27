class ModalSearchError {
  constructor(element) {
    this._element = element;
  }

  template() {
    return `
    <div class="resultArea d-flex justify-content-center p-md-1 m-md-1">
    <img class="poster p-3" id="poster" src="srcs/assets/Popcorn.png">
    <div class="memberSearch m-md-3 p-md-3">
      <h3 class="mb-5 text-center" id="title"><b>Movie Not Found</b></h3>
  </div>
    `;
  }

  update() {
    this._element.innerHTML = this.template();
  }
}