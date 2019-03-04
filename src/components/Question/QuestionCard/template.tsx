import * as React from "react";
import { Card } from "semantic-ui-react";
import { Question } from "../../../store/question/types";

interface Props {
  question: Question;
  showDetail: any;
}

interface State {
  id: number;
}

class QuestionCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: 10
    };
  }

  handleClick = () => {
    this.props.showDetail(this.props.question);
    console.log("[dev:hugo] state", this.state.id);
  };

  render() {
    const { question } = this.props;
    return (
      <Card fluid onClick={this.handleClick}>
        <Card.Content>
          <Card.Header>{question.question}</Card.Header>
          <Card.Meta>{new Date(question.published_at).toLocaleString()}</Card.Meta>
          <Card.Description>{question.choices.length} choices</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default QuestionCard;
