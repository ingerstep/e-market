import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1727280501204 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "users" (
              "id" SERIAL PRIMARY KEY,
              "email" VARCHAR(255) UNIQUE, 
              "username" VARCHAR(255) UNIQUE,
              "password" VARCHAR(255)
            );
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users";`);
  }
}
