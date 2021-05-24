import { FC } from "react";
import { useQuery } from "@apollo/client";
import { getRecipeById } from "../../api/recipes";
import { Link, useParams } from "react-router-dom";

type Recipe = {
  id: number;
  title: String;
};

type Props = {
  recipes?: [Recipe];
};

const Recipe: FC<Props> = (props: Props): JSX.Element => {
  const { id } = useParams();

  console.log("id", id);

  const { data, loading, error } = useQuery(getRecipeById, {
    variables: {
      id: parseInt(id),
    },
  });
  console.log("data", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>{data.recipe.title}</div>;
};

export default Recipe;
