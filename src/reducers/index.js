import { combineReducers } from "redux";
import { reducer as questionSaga } from "sagas/question/reducer";

const reducers = combineReducers({
  questionSaga
});

export default reducers;
