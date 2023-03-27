export interface Product {
  _id: string;
  name: string;
  discription: string;
  price: number;
  volume: string;
  img: string[];
  category: {
    _id: string;
    name: string;
  };
  subcategory: object;
  quantity: number;
  discount: number;
}
