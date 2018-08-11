import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";

class QuestionCard extends Component {
  static propTypes = {
    question: PropTypes.object,
    showDetail: PropTypes.func
  };

  handleClick = () => {
    this.props.showDetail(this.props.question);
  };

  render() {
    const { question } = this.props;
    return (
      <Card fluid onClick={this.handleClick}>
        <Card.Content>
          <Card.Header>{question.question}</Card.Header>
          <Card.Meta>
            {new Date(question.published_at).toLocaleString()}
          </Card.Meta>
          <Card.Description>{question.choices.length} choices</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default QuestionCard;
