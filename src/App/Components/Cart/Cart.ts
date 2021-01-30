import { appStore } from '../../Store/AppStore';
import { CartProducts } from '../../Store/State';

export class Cart {
  private products: CartProducts = {};
  private amount = 0;
  private sum = 0;

  constructor() {
    appStore.$state.subscribe(({ cart }) => {
      this.products = cart.products;
      this.amount = Object.keys(this.products).length;
      this.sum = Object.values(this.products).reduce((sum, item) => sum + item.product.price, 0);
    });
  }

  render() {
    return `
      <div>
        Cart
        <ul class="list-group" style="margin-top: 1em;">
          ${Object.values(this.products)
            .map(
              ({ amount, product }) => `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${product.name} ($${product.price})
                    <a href="#" class="btn">➕</a>
                    <a href="#" class="btn">➖</a>
                    <span class="badge bg-primary rounded-pill">${amount}</span>
                </li>
                `
            )
            .join('')}
        </ul>
        <p>
            Summary: ${this.amount} products, $${this.sum}
        </p>
      </div>
    `;
  }
}
