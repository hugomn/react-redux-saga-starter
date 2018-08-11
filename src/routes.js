import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import QuestionList from "components/Question/QuestionList";
import QuestionDetail from "components/Question/QuestionDetail";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={QuestionList} />
          <Route path="/questions/:id" component={QuestionDetail} />
        </Switch>
      </div>
    );
  }
}
