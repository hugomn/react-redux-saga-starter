import { connect } from "react-redux";
import { fetchQuestionsRequested } from "components/Question/actionCreators";
import template from "./template";

const mapStatetoProps = state => {
  return {
    questions: state.questions.items || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => {
      dispatch(fetchQuestionsRequested());
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(template);
