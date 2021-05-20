import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class Recipe {
  @Field()
  @PrimaryKey()
  id!: string;

  @Field()
  @Property({ type: "text" })
  title!: string;

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: "text" })
  modifiedAt = new Date();
}
