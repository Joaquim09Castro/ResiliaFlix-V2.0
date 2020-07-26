class ModalSearchModel {
  constructor(response) {
    this._title = response.Title;
    this._poster = response.Poster;
    this._year = response.Year;
    this._release = response.Released;
    this._runtime = response.Runtime;
    this._director = response.Director;
    this._plot = response.Plot;
    this._rating = response.imdbRating;
  }

  get data() {
    return {
      title: this._title,
      poster: this._poster,
      year: this._year,
      release: this._release,
      runtime: this._runtime,
      director: this._director,
      plot: this._plot,
      rating: this._rating
    };
  }
}