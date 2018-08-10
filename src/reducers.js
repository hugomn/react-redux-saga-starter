import { combineReducers } from "redux";
import questionReducer from "components/Question/reducers";

const reducers = combineReducers({
  questions: questionReducer
});

export default reducers;
