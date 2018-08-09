import { connect } from "react-redux";
import { fetchQuestions } from "sagas/question/reducer";
import template from "./template";

const mapStatetoProps = state => {
  return {
    questions: state.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => {
      dispatch(fetchQuestions());
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(template);
