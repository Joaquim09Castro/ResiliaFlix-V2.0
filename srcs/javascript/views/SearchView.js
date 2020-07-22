class SearchView { // View Provisória
  constructor(element) {
    this._element = element;
  }

  template(model) {
    return `
      <img src="${model.poster}" rel="${model.title} poster">
    `;
  }

  update(model) {
    this._element.innerHTML += this.template(model);
  }
}