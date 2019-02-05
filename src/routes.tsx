import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import QuestionList from "./components/Question/QuestionList";
// import QuestionDetail from "./components/Question/QuestionDetail";
import Loadable from 'react-loadable';

const QuestionList = Loadable({
  loader: () => import(/* webpackChunkName: "QuestionList" */ './components/Question/QuestionList'),
  loading: () => null,
  modules: ['QuestionList']
});

const QuestionDetail = Loadable({
  loader: () => import(/* webpackChunkName: "QuestionDetail" */ './components/Question/QuestionDetail'),
  loading: () => null,
  modules: ['QuestionDetail']
});

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
