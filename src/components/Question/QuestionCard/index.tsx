import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { showDetail } from "../../../store/question/actions";
import template from "./template";
import { Question } from "../../../store/question/types";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    showDetail: (question: Question) => dispatch(showDetail(question))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(template);
