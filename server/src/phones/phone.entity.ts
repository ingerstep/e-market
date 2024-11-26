import { Product } from 'src/dto/product.dto';
import { Column, Entity } from 'typeorm';

@Entity()
export class Phone extends Product {
  @Column()
  screenDiagonal: string;

  @Column()
  screenResolution: string;

  @Column()
  screenRefreshRate: string;

  @Column()
  screenType: string;

  @Column()
  cpu: string;

  @Column()
  cores: number;

  @Column('simple-array')
  colors: string[];

  @Column('simple-array')
  memory: string[];

  @Column()
  mainCamera: string;

  @Column()
  frontCamera: string;

  @Column()
  capacity: string;

  @Column('simple-array')
  additionally: string[];

  @Column()
  pixelDensity: string;
}
