import DataLoader from "dataloader";
import { Recipe } from "../entities/Recipe";

const createRecipeLoader = () =>
  new DataLoader<number, Recipe>(async (recipeIds) => {
    const recipes = await Recipe.findByIds(recipeIds as number[]);
    const recipeIdtoRecipe: Record<number, Recipe> = {};
    recipes.forEach((r) => {
      recipeIdtoRecipe[r.id] = r;
    });

    const sortedRecipes = recipeIds.map(
      (recipeId) => recipeIdtoRecipe[recipeId]
    );

    return sortedRecipes;
  });

export default createRecipeLoader;
