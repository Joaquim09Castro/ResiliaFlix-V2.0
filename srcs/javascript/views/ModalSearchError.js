class ModalSearchError {
  constructor(element) {
    this._element = element;
  }

  template() {
    return `
    <div class="resultArea d-flex justify-content-center p-md-1 m-md-1">
    <img class="poster p-3" id="poster" src="srcs/assets/placeholder_cover.jpg">
    <div class="memberSearch m-md-3 p-md-3">
      <h3 class="mb-5" id="title"><b>Title</b></h3>
      <p id="year"><b>YEAR</b>: Year</p>
      <p id="director"><b>DIRECTOR</b>: Director</p>
      <p id="runtime"><b>RUNTIME</b>: Runtime</p>
      <p id="actors"><b>RATING</b>: Rating</p>
      <p id="release"><b>RELEASE DATE</b>: Release</p>
      <p id="synopsis"><b>SYNOPSIS</b>: Synopsis</p>
  </div>
    `;
  }

  update() {
    this._element.innerHTML = this.template();
  }
}