import { Recipe } from "../entities/Recipe";
import { Resolver, Query, Ctx } from "type-graphql";
import { MyContext } from "../types";

@Resolver()
export class RecipeResolver {
  @Query(() => [Recipe])
  getRecipes(@Ctx() { em }: MyContext): Promise<Recipe[0]> {}
}
