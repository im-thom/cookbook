import { useQuery } from "@apollo/client";
import { getRecipes } from "../../api/recipes";

const Test = () => {
  const { data, loading, error } = useQuery(getRecipes);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.recipes.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  );
};

export default Test;
