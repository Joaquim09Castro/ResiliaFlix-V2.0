class SearchView { // View Provisória
  constructor(element) {
    this._element = element;
  }

  template(model) {
    return `
    <div class="card bg-dark text-white">
      <img src="${model.poster}" class="card-img" alt="${model.title} Poster">
      <div class="card-img-overlay movieTitle">
        <p>${model.title}</p>
      </div>
    </div>
    `;
  }

  update(model) {
    this._element.innerHTML += this.template(model);
  }
}