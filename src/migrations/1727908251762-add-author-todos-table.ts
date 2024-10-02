import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAuthorTodosTable1727908251762 implements MigrationInterface {
    name = 'AddAuthorTodosTable1727908251762'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "author" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "author"`);
    }

}
