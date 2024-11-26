export interface IProduct {
  id: number;
  type:
    | 'phones'
    | 'smart-watches'
    | 'cameras'
    | 'headphones'
    | 'computers'
    | 'gaming';
  name: string;
  brand: string;
  price: number;
  details: string;
  capacity: string;
  isBestseller: boolean;
  isNewArrival: boolean;
  isFeatured: boolean;
  isDiscounted: boolean;
  isLiked: boolean;
}
