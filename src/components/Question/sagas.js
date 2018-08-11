import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from "components/Question/actions";
import * as actionCreators from "components/Question/actionCreators";
import api from "service/api";
import { push } from "connected-react-router";

export function* voteQuestion({ payload }) {
  try {
    const res = yield call(api.postChoice, payload.choice.url);
    yield put(actionCreators.choiceVoteSucceeded(res.data));
  } catch (err) {
    yield put(actionCreators.choiceVoteFailed(err));
  }
}

export function* fetchQuestion({ payload }) {
  try {
    const res = yield call(api.getQuestion, payload.id);
    yield put(actionCreators.fetchQuestionSucceeded(res.data));
  } catch (err) {
    yield put(actionCreators.fetchQuestionFailed(err));
  }
}

export function* fetchQuestions() {
  try {
    const res = yield call(api.getQuestions);
    yield put(actionCreators.fetchQuestionsSucceeded(res.data));
  } catch (err) {
    yield put(actionCreators.fetchQuestionsFailed(err));
  }
}

export function* showDetail({ payload }) {
  yield put(push(payload.question.url));
}

function* sagas() {
  yield all([
    takeLatest(actions.QUESTION_SHOW_DETAIL, showDetail),
    takeLatest(actions.QUESTION_CHOICE_VOTE_REQUESTED, voteQuestion),
    takeLatest(actions.QUESTION_FETCH_REQUESTED, fetchQuestion),
    takeLatest(actions.QUESTIONS_FETCH_REQUESTED, fetchQuestions)
  ]);
}

export default sagas;
