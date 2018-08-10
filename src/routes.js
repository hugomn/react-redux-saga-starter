import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Question from "components/Question";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Question} />
          </Switch>
        </Router>
      </div>
    );
  }
}
