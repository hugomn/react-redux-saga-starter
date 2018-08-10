import { put, takeLatest } from "redux-saga/effects";
import * as actions from "components/Question/actions";
import { fetchQuestionsSucceeded } from "components/Question/actionCreators";

export function* fetchQuestions() {
  yield put(fetchQuestionsSucceeded());
}

function* sagas() {
  yield takeLatest(actions.QUESTIONS_FETCH_REQUESTED, fetchQuestions);
}

export default sagas;
