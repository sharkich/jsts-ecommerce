import { ProductsList } from './Components/ProductsList';
import { Cart } from './Components/Cart';
import { AppComponent } from './Interfaces/AppComponent';

export class App implements AppComponent {
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

  addEvents() {
    this.card.addEvents();
    this.productsList.addEvents();
  }
}
