import { connect } from "react-redux";
import * as actions from "../../../store/question/actions";
import template from "./template";
import { ApplicationState } from "../../../store"
import { Dispatch } from 'redux';
import { Choice } from "../../../store/choice/types";

const mapStateToProps = (state: ApplicationState) => {
  return {
    activeQuestion: state.questions.activeQuestion
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getQuestion: (id: number) => {
      dispatch(actions.fetchQuestionRequested(id));
    },
    choiceVote: (choice: Choice) => {
      dispatch(actions.choiceVoteRequested(choice));
    },
    selectChoice: (choice: Choice) => {
      console.log('[dev:hugo] choice', choice);
      dispatch(actions.choiceSelected(choice));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(template);
