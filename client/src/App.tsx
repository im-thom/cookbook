import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
