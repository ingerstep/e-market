import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Phone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

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
  imgPath: string[];

  @Column('simple-array')
  colors: string[];

  @Column('simple-array')
  memory: string[];

  @Column()
  mainCamera: string;

  @Column()
  frontCamera: string;

  @Column()
  details: string;

  @Column()
  capacity: string;

  @Column('simple-array')
  additionally: string[];

  @Column()
  pixelDensity: string;
}
