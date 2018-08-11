import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Container, Header, Loader } from "semantic-ui-react";
import QuestionCard from "components/Question/QuestionCard";

class QuestionList extends Component {
  static propTypes = {
    getQuestions: PropTypes.func,
    questions: PropTypes.array
  };

  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    const { questions } = this.props;
    return (
      <React.Fragment>
        <Container>
          <Header as="h1">Questions</Header>
          <Grid stackable>
            {questions.length ? (
              questions.map(question => (
                <Grid.Column
                  computer={4}
                  tablet={8}
                  mobile={16}
                  key={question.url}
                >
                  <QuestionCard question={question} />
                </Grid.Column>
              ))
            ) : (
              <Loader
                active
                size="large"
                inline="centered"
                style={{ marginTop: "250px" }}
              >
                Loading...
              </Loader>
            )}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default QuestionList;
