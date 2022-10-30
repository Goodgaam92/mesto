export default class Section{
    constructor({render},container) {
        this._renderer = render;
        this._container = document.querySelector(container);
    }
    clear() {
        this._container.innerHTML = '';
    }
    addItem(element){
        this._container.prepend(element);
    }
    renderItems(items){
        this.clear()
        items.forEach((item) => this._renderer(item));
    }
}
