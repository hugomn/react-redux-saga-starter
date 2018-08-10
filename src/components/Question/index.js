import { connect } from "react-redux";
import { fetchQuestions } from "components/Question/actionCreators";
import template from "./template";

const mapStatetoProps = state => {
  return {
    questions: state.questions.items || []
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
