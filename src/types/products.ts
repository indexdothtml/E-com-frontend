export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
};

export type ItemsAndCount = {
  item: Product;
  count: number;
};

export type CartDetails = {
  totalItems: number;
  items: ItemsAndCount[];
  totalPrice: number;
  shippingCharge: number;
  totalWithShippingCharge: number;
};
