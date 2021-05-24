import { Layout } from "antd";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Recipe from "./components/Recipe";
import Recipes from "./components/Recipes";
import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Layout.Header>
            <NavBar />
          </Layout.Header>
          <Layout.Content>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/recipes">
              <Recipes />
            </Route>
            <Route path="/recipe/:id">
              <Recipe />
            </Route>
          </Layout.Content>
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
