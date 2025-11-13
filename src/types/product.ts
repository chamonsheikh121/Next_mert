export type TProduct = {
  _id: string;
  imageUrls: string[];
  name: string;
  description: string;
  price: number;
  stock: number;
  weight: number;
  category: string;
  brand: string;
  availableColors: string[];
  specification: Record<string, string>;
  keyFeatures: string[];
};
