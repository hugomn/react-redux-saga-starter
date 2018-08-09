import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuestionList from "components/QuestionList";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={QuestionList} />
          </Switch>
        </Router>
      </div>
    );
  }
}
