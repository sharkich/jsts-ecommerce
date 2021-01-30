import { Product } from '../Interfaces/Product';
import { getProducts } from '../DB/Products.DB';
import { appStore } from '../Store/AppStore';

export class ProductsModel {
  static isExist = false;
  static instance: ProductsModel;

  constructor() {
    if (ProductsModel.isExist) {
      return ProductsModel.instance;
    }

    ProductsModel.isExist = true;
    ProductsModel.instance = this;
  }

  getProducts(): Promise<Product[]> {
    return getProducts().then((products) => {
      appStore.update({
        products,
      });
      return products;
    });
  }
}

export const productsModel = new ProductsModel();
