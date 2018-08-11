import { connect } from "react-redux";
import { showDetail } from "components/Question/actionCreators";
import template from "./template";

const mapStatetoProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    showDetail: question => {
      dispatch(showDetail(question));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(template);
