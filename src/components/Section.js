export default class Section{
    constructor({items,render},container) {
        this._renderedItems = items;
        this._renderer = render;
        this._container = document.querySelector(container);
    }
    clear() {
        this._container.innerHTML = '';
    }
    addItem(element){
        this._container.prepend(element);
    }
    renderItems(){
        this.clear();
        this._renderedItems.forEach((item) => this._renderer(item));
    }
}
