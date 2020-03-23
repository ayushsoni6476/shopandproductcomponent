import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Home from "./Home";
import ProductList from "./ProductList";
import "./styles.css";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/ProductList" exact component={ProductList} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}
