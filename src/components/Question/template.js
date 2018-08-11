import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Grid, Container, Header } from "semantic-ui-react";

class QuestionList extends Component {
  static propTypes = {
    fetchQuestions: PropTypes.func,
    questions: PropTypes.array
  };

  componentDidMount = () => {
    this.props.fetchQuestions();
  };

  renderQuestion = question => {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{question.question}</Card.Header>
          <Card.Meta>{question.published_at} </Card.Meta>
          <Card.Description>{question.choices.length} choices</Card.Description>
        </Card.Content>
      </Card>
    );
  };

  render() {
    const { questions } = this.props;
    return (
      <React.Fragment>
        <Container>
          <Header as="h1">Questions</Header>
          <Grid stackable>
            {questions.map(question => (
              <Grid.Column computer={4} tablet={8} mobile={16}>
                {this.renderQuestion(question)}
              </Grid.Column>
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default QuestionList;
