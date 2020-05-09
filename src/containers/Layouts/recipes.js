import React from "react";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const RecipesLayout = (props) => {
  return (
  <>
  {props.children}
  </>
  );
};

export default RecipesLayout;
