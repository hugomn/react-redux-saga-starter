import * as React from 'react'
import { Choice } from "../../../store/choice/types";
import { Question } from "../../../store/question/types";
import { RouteComponentProps } from 'react-router'
import {
  Button,
  Divider,
  Container,
  Header,
  Icon,
  Progress,
  Radio,
  Loader,
  Table
} from "semantic-ui-react";

interface Props {
  activeQuestion?: Question
  choiceVote: any
  getQuestion: any
  selectChoice: any
}

interface RouteProps {
  id: string
} 

class QuestionDetail extends React.Component<Props & RouteComponentProps<RouteProps>> {

  componentDidMount() {
    this.props.getQuestion(this.props.match.params.id);
  }

  handleChoiceClick = (choice: Choice) => {
    this.props.selectChoice(choice);
  };

  handleVoteSubmit = () => {
    this.props.choiceVote(this.props.activeQuestion!.selectedChoice);
  };

  renderChoice = (choice: Choice) => {
    const { activeQuestion } = this.props;
    const { selectedChoice } = activeQuestion!;
    const selected = selectedChoice && choice.url === selectedChoice.url;
    console.log('[dev:hugo] selectedChoice', selectedChoice);
    return (
      <Table.Row
        key={choice.url}
        onClick={() => this.handleChoiceClick(choice)}
        positive={selected}
      >
        <Table.Cell collapsing textAlign="center">
          <Radio checked={selected} />
        </Table.Cell>
        <Table.Cell>{choice.choice}</Table.Cell>
        <Table.Cell>{choice.votes} votes</Table.Cell>
        <Table.Cell>
          <Progress
            total={activeQuestion!.total}
            value={choice.votes}
            precision={0}
            indicating
          />
        </Table.Cell>
      </Table.Row>
    );
  };

  render() {
    const { activeQuestion } = this.props;
    if (activeQuestion) {
      return (
        <React.Fragment>
          <Container>
            <Header as="h1">Questions detail</Header>
            <Header as="h2">Question: {activeQuestion.question}</Header>
            <Divider hidden />
            <Table celled definition selectable>
              <Table.Body>
                {activeQuestion.choices.map(choice =>
                  this.renderChoice(choice)
                )}
              </Table.Body>

              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell colSpan="4">
                    <Button
                      floated="right"
                      labelPosition="left"
                      icon
                      primary
                      disabled={!activeQuestion.selectedChoice}
                      onClick={this.handleVoteSubmit}
                    >
                      <Icon name="add" /> Save Vote
                    </Button>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Container>
        </React.Fragment>
      );
    }
    return (
      <Loader
        active
        size="large"
        inline="centered"
        style={{ marginTop: "250px" }}
      >
        Loading...
      </Loader>
    );
  }
}

export default QuestionDetail;
