class SearchView { // View Provisória
  constructor(element) {
    this._element = element;
  }

  template(model) {
    return `
    <div class="col mb-4" id="1">
      <div class="card bg-dark text-white resultCard" id="2">
        <a data-toggle="modal" data-target="#infoMovies" class="movie-card">
          <img src="${model.poster}" class="card-img" alt="${model.poster} poster" id="3">
          <div class="card-img-overlay movieTitle" id="${model.id}">
            <p class="" id="${model.id}">${model.title}</p>
          </div>
        </a>
      </div>
    </div>
    `;
  }

  update(model) {
    this._element.innerHTML += this.template(model);
  }
}