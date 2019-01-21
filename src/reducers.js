import { combineReducers } from "redux";
import questionReducer from "components/Question/reducers";
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  questions: questionReducer
});
