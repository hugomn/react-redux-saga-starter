import { connect } from "react-redux";
import * as actionCreators from "components/Question/actionCreators";
import template from "./template";

const mapStateToProps = state => {
  return {
    activeQuestion: state.questions.activeQuestion
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestion: id => {
      dispatch(actionCreators.fetchQuestionRequested(id));
    },
    choiceVote: choice => {
      dispatch(actionCreators.choiceVoteRequested(choice));
    },
    selectChoice: choice => {
      dispatch(actionCreators.choiceSelected(choice));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(template);
