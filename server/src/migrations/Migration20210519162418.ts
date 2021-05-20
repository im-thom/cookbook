import { Migration } from '@mikro-orm/migrations';

export class Migration20210519162418 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "recipe" ("id" varchar(255) not null, "title" varchar(255) not null, "created_at" jsonb not null, "modified_at" jsonb not null);');
    this.addSql('alter table "recipe" add constraint "recipe_pkey" primary key ("id");');
  }

}
