import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { fetchQuestionsRequested } from "../../../store/question/actions";
import template from "./template";
import { ApplicationState } from "../../../store"

const mapStateToProps = (state: ApplicationState) => {
  return {
    questions: state.questions.items || []
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getQuestions: () => {
      dispatch(fetchQuestionsRequested());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(template);
