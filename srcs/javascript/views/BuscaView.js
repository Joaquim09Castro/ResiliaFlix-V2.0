class BuscaView {
  constructor(element) {
    this._element = element;
  }

  template(model) {
    return `
      <img href="${model.poster}" rel="${model.title} poster">
    `;
  }

  update(model) {
    this._element.innerHTML += this.template(model);
  }
}