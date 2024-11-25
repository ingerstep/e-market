import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  AdditionallyType,
  BrandType,
  CapacityType,
  ColorsType,
  CoreType,
  CPUType,
  FrontCameraType,
  MainCameraType,
  MemoryType,
  NameType,
  PixelDensityType,
  PriceType,
  ScreenDiagonalType,
  ScreenRefreshType,
  ScreenResolutionType,
  ScreenType,
} from './phones.types';

@Entity()
export class Phone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: NameType;

  @Column()
  brand: BrandType;

  @Column()
  price: PriceType;

  @Column()
  screenDiagonal: ScreenDiagonalType;

  @Column()
  screenResolution: ScreenResolutionType;

  @Column()
  screenRefreshRate: ScreenRefreshType;

  @Column()
  screenType: ScreenType;

  @Column()
  cpu: CPUType;

  @Column()
  cores: CoreType;

  @Column('simple-array')
  imgPath: string[];

  @Column('simple-array')
  colors: ColorsType;

  @Column('simple-array')
  memory: MemoryType;

  @Column()
  mainCamera: MainCameraType;

  @Column()
  frontCamera: FrontCameraType;

  @Column()
  details: string;

  @Column()
  capacity: CapacityType;

  @Column('simple-array')
  additionally: AdditionallyType;

  @Column()
  pixelDensity: PixelDensityType;

  @Column({ default: false })
  isBestseller: boolean;

  @Column({ default: false })
  isNewArrival: boolean;

  @Column({ default: false })
  isFeatured: boolean;

  @Column({ default: false })
  isDiscounted: boolean;
}
