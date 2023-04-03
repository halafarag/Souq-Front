export interface Product {
  toLowerCase(): unknown;
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
  subcategory: {
    _id: string;
    name: string;
  };
  quantity: number;
  discount: number;
}
