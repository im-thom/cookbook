import React from "react";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const RecipesLayout = (props) => {
  return (
    <Layout>
      <Header></Header>
      <Content>{props.children}</Content>
      <Footer></Footer>
    </Layout>
  );
};

export default RecipesLayout;
