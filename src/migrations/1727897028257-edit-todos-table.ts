import { MigrationInterface, QueryRunner } from "typeorm";

export class EditTodosTable1727897028257 implements MigrationInterface {
    name = 'EditTodosTable1727897028257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "title" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "title"`);
    }

}
