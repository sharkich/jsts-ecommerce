import { Product } from '../../Interfaces/Product';

export class ProductItem {
  constructor(private product: Product) {}
  render() {
    return `
      <div class="card" style="width: 18rem; margin: 1em;">
        <img src="${this.product.image}" alt="${this.product.name}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${this.product.name}</h5>
          <p class="card-text">$${this.product.price}</p>
          <a href="#" class="btn btn-primary">BUY</a>
        </div>
      </div>
    `;
  }
}
