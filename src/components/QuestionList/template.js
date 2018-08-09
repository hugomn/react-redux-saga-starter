import React, { Component } from "react";
import PropTypes from "prop-types";

class QuestionList extends Component {
  static propTypes = {
    fetchQuestions: PropTypes.func,
    questions: PropTypes.object
  };

  componentDidMount = () => {
    this.props.fetchQuestions();
  };

  render() {
    const { questions } = this.props;
    return (
      <React.Fragment>
        <h1>Questions</h1>
        {questions && questions.length}
      </React.Fragment>
    );
  }
}

export default QuestionList;
