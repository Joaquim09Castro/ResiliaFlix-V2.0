class BuscaModel {
  constructor(requestJson) {
    this._title = requestJson.Title;
    this._year = requestJson.Year;
    this._id = requestJson.imdbID;
    this._poster = requestJson.Poster;
  }

  get title() {
    return this._title;
  }

  get Year() {
    return this._year;
  }

  get id() {
    return this._id;
  }

  get poster() {
    return this._poster;
  }

  get movie() {
    return {
      title: this._title,
      year: this._year,
      posterUrl: this._poster,
      imdbId: this._id
    };
  }
}