import { ProductsList } from './Components/ProductsList';
import { Cart } from './Components/Cart';

export class App {
  private productsList = new ProductsList();
  private card = new Cart();

  render() {
    return `
    <div class="container">
      <div class="row">
        <div class="col-3">
          ${this.card.render()}
        </div>
        <div class="col-9">
          ${this.productsList.render()}
        </div>
      </div>
    </div>
    `;
  }
}
