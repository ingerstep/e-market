import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  price: string;

  @Column('simple-array')
  imgPath: string[];

  @Column()
  details: string;

  @Column({ default: false })
  isBestseller: boolean;

  @Column({ default: false })
  isNewArrival: boolean;

  @Column({ default: false })
  isFeatured: boolean;

  @Column({ default: false })
  isDiscounted: boolean;

  @Column({ default: false })
  isLiked: boolean;
}
