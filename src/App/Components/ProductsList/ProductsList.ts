import { ProductItem } from '../ProductItem';

export class ProductsList {
  private products: ProductItem[] = [new ProductItem(), new ProductItem(), new ProductItem(), new ProductItem()];

  render() {
    return `
        <h2>Products List</h2>
        ${this.products.map((product) => product.render()).join('')}
        <p>----</p>
        <div>
            <button>prev</button>
            <button>next</button>
        </div>
    `;
  }
}
