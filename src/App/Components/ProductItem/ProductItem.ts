import { Product } from '../../Interfaces/Product';
import { AppComponent } from '../../Interfaces/AppComponent';
import { cartModel } from '../../Models/CartModel';

export class ProductItem implements AppComponent {
  constructor(private product: Product) {}

  private getHtmlID = () => `product_${this.product.id}`;

  render() {
    return `
      <div class="card" style="width: 18rem; margin: 1em;">
        <img src="${this.product.image}" alt="${this.product.name}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${this.product.name}</h5>
          <p class="card-text">$${this.product.price}</p>
          <a href="#" class="btn btn-primary" id="${this.getHtmlID()}">BUY</a>
        </div>
      </div>
    `;
  }

  addEvents() {
    const button = document.getElementById(this.getHtmlID());
    if (!button) {
      throw new Error('Button is undefined');
    }
    button.addEventListener('click', (event) => {
      event.preventDefault();
      cartModel.addProduct(this.product);
    });
  }
}
