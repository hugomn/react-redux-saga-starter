import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "components/Question/actions";
import { fetchQuestionsSucceeded } from "components/Question/actionCreators";
import api from "utils/api";
import { fetchQuestionsFailed } from "./actionCreators";

export function* fetchQuestions() {
  try {
    const res = yield call(api.getQuestions);
    yield put(fetchQuestionsSucceeded(res));
  } catch (err) {
    yield put(fetchQuestionsFailed(err));
  }
}

function* sagas() {
  yield takeLatest(actions.QUESTIONS_FETCH_REQUESTED, fetchQuestions);
}

export default sagas;
