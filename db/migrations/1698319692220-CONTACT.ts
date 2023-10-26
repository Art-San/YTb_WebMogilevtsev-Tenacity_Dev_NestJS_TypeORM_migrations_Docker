import { MigrationInterface, QueryRunner } from "typeorm";

export class CONTACT1698319692220 implements MigrationInterface {
    name = 'CONTACT1698319692220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Contacts" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "contacts" integer NOT NULL, CONSTRAINT "PK_68782cec65c8eef577c62958273" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "User" ADD "contactId" integer`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "UQ_d356ab8130bf78488c10c8e69fd" UNIQUE ("contactId")`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_d356ab8130bf78488c10c8e69fd" FOREIGN KEY ("contactId") REFERENCES "Contacts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_d356ab8130bf78488c10c8e69fd"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "UQ_d356ab8130bf78488c10c8e69fd"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "contactId"`);
        await queryRunner.query(`DROP TABLE "Contacts"`);
    }

}
