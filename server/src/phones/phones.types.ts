import { IProduct } from 'src/dto/types';

export interface IPhone extends IProduct {
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
