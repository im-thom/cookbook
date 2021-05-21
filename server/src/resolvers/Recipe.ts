import { Recipe } from "../entities/Recipe";
import {
  Resolver,
  Query,
  Arg,
  Mutation,
  Int,
  InputType,
  Field,
} from "type-graphql";

@InputType()
class RecipeUpdateInput {
  @Field(() => String, { nullable: true })
  title?: string;
}

@Resolver(Recipe)
export class RecipeResolver {
  // Read all recipes
  @Query(() => [Recipe])
  recipes() {
    return Recipe.find({});
  }

  // Read single Recipe by id
  @Query(() => Recipe)
  recipe(@Arg("id", () => Int) id: number) {
    return Recipe.findOne(id, {});
  }

  // Create Recipe
  @Mutation(() => Recipe)
  async createRecipe(@Arg("title") title: string) {
    const recipe = await Recipe.create({ title }).save();
    return recipe;
  }

  // Update Recipe
  @Mutation(() => Recipe)
  async updateRecipe(
    @Arg("id", () => Int) id: number,
    @Arg("updates", () => RecipeUpdateInput) updates: RecipeUpdateInput
  ) {
    await Recipe.update({ id }, updates);
    return Recipe.findOne({ id });
  }

  // Delete Recipe
  @Mutation(() => Boolean)
  async deleteRecipe(@Arg("id", () => Int) id: number) {
    await Recipe.delete({ id });
    return true;
  }
}
