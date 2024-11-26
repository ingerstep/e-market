import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePhoneTable1726671743911 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "phone" (
        "id" SERIAL PRIMARY KEY,
        "type" VARCHAR(255),
        "name" VARCHAR(255),
        "brand" VARCHAR(255),
        "price" INTEGER,
        "screenDiagonal" VARCHAR(255),
        "screenResolution" VARCHAR(255),
        "screenRefreshRate" VARCHAR(255),
        "screenType" VARCHAR(255),
        "cpu" VARCHAR(255),
        "cores" INTEGER,
        "imgPath" TEXT[],
        "colors" TEXT[],
        "memory" TEXT[],
        "mainCamera" VARCHAR(255),
        "frontCamera" VARCHAR(255),
        "details" TEXT,
        "capacity" VARCHAR(255),
        "additionally" TEXT[],
        "pixelDensity" VARCHAR(255),
        "isBestseller" BOOLEAN DEFAULT FALSE,  
        "isNewArrival" BOOLEAN DEFAULT FALSE,  
        "isFeatured" BOOLEAN DEFAULT FALSE,    
        "isDiscounted" BOOLEAN DEFAULT FALSE,
        "isLiked" BOOLEAN DEFAULT FALSE   
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "phone" CASCADE;`);
  }
}
