import { Product } from '../Interfaces/Product';
import { getProducts } from '../DB/Products.DB';
import { appStore } from '../Store/AppStore';

export class CartModel {
  static isExist = false;
  static instance: CartModel;

  constructor() {
    if (CartModel.isExist) {
      return CartModel.instance;
    }

    CartModel.isExist = true;
    CartModel.instance = this;
  }

  addProduct(product: Product): void {
    appStore.update({
      cart: {
        products: {
          [product.id]: {
            amount: 1,
            product,
          },
        },
      },
    });
  }
}

export const cartModel = new CartModel();
