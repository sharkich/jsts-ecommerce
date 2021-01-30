import { ProductItem } from '../ProductItem';
import { productsModel } from '../../Models/ProductsModel';
import { Product } from '../../Interfaces/Product';
import { appStore } from '../../Store/AppStore';

export class ProductsList {
  private loading = false;
  private error: Error | null = null;
  private products: Product[] = [];

  constructor() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.loading = true;
    productsModel
      .getProducts()
      .then((products) => {
        this.products = products;
      })
      .catch((error) => {
        this.error = error;
      })
      .finally(() => {
        this.loading = false;
        appStore.$render.next(null);
      });
  }

  render() {
    return `
        <h2>Products List</h2>
        <div style="display: flex; flex-wrap: wrap;">
            ${this.products
              .map((product) => new ProductItem(product))
              .map((product) => product.render())
              .join('')}
        </div>
        <div>
        ${
          this.loading
            ? `<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>`
            : ''
        }
        </div>
        <div>${this.error ? `<div class="alert alert-danger" role="alert">${this.error.message}</div>` : ''}</div>
        
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">Prev</button>
          <button type="button" class="btn btn-primary">Next</button>
        </div>
    `;
  }
}
