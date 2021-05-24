import { FC } from "react";
import { useQuery } from "@apollo/client";
import { getRecipes } from "../../api/recipes";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";

type Recipe = {
  id: number;
  title: String;
};

type Props = {
  recipes?: [Recipe];
};

const Recipes: FC<Props> = (props: Props): JSX.Element => {
  const { data, loading, error } = useQuery(getRecipes);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Row gutter={[16, 16]}>
      {data.recipes.map(({ id, title }) => (
        <Col key={id} span={4}>
          <Card
            title={title}
            actions={[<Link to={`recipe/${id}`}>View</Link>]}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Recipes;
