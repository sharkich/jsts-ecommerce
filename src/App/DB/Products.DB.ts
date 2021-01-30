import { Product } from '../Interfaces/Product';

const PRODUCTS: Product[] = [
  {
    favorite: false,
    id: 'product_1',
    image: 'https://images-na.ssl-images-amazon.com/images/I/710JyyeH3EL._AC_UL405_SR405,405_.jpg',
    name: 'Presto 1',
    price: 11,
  },

  {
    favorite: false,
    id: 'product_2',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81kj43qfZzL._AC_UL405_SR405,405_.jpg',
    name: 'Presto 2',
    price: 22,
  },

  {
    favorite: false,
    id: 'product_3',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71SovGeT32L._AC_UL405_SR405,405_.jpg',
    name: 'Presto Presto 3',
    price: 3,
  },

  {
    favorite: true,
    id: 'product_4',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71B1fuOuQVL._AC_UL405_SR405,405_.jpg',
    name: 'Knife Sharpener',
    price: 399,
  },

  {
    favorite: false,
    id: 'product_5',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71vl%2BnrWonL._AC_UL405_SR405,405_.jpg',
    name: 'Knife Sharpener 2',
    price: 599,
  },

  {
    favorite: false,
    id: 'product_5',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71twHDMC8OL._AC_UL405_SR405,405_.jpg',
    name: 'Knife Sharpener TOP',
    price: 1499,
  },
];

export const getProducts = (): Promise<Product[]> => {
  return new Promise<Product[]>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error('Something wend wrong'));
      } else {
        resolve(PRODUCTS);
      }
    }, 2000);
  });
};
