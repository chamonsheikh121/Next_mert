export type TProduct = {
  _id: string;
  imageUrls: string[];
  name: string;
  description: string;
  price: number;
  stock: number;
  weight: number;
  offerPrice:number;
  category: Record<string, string>;
  brand: Record<string, string>;
  availableColors: string[];
  specification: Record<string, string>;
  keyFeatures: string[];
};
