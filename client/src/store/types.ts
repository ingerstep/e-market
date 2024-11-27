import { store } from '.';

export interface PhonesDiscountState {
  phones: PhonesCategoryProps[];
  loading: boolean;
  error: string | null;
}

export interface PhonesCategoryProps {
  id: number;
  price: number;
  imgPath: string[];
  isLiked: boolean;
  name: string;
}

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export type Categories =
  | 'phones'
  | 'smart-watches'
  | 'cameras'
  | 'headphones'
  | 'computers'
  | 'gaming';

export interface Phone {
  id: number;
  type: Categories;
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
  screenDiagonal: string;
  screenResolution: string;
  screenRefreshRate: string;
  screenType: string;
  cpu: string;
  cores: number;
  imgPath: string[];
  colors: string[];
  memory: string[];
  mainCamera: string;
  frontCamera: string;
  pixelDensity: string;
  additionally: string[];
}

export interface PhonesState {
  phones: Phone[];
  loading: boolean;
  error: string | null;
}
