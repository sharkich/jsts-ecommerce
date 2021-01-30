import { ProductsList } from './Components/ProductsList';

export class App {
  private productsList = new ProductsList();

  render() {
    return `
    <div class="container">
      <div class="row">
        <div class="col-12">
          ${this.productsList.render()}
        </div>
      </div>
    </div>
    `;
  }
}
