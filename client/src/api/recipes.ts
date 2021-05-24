import { gql } from "@apollo/client";

export const getRecipes = gql`
  query GetRecipes {
    recipes {
      id
      title
    }
  }
`;

export const getRecipeById = gql`
  query GetRecipeById($id: Int!) {
    recipe(id: $id) {
      id
      title
    }
  }
`;
