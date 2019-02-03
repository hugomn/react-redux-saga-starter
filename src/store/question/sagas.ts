import { all, call, put, takeLatest } from "redux-saga/effects";
import { QuestionsActionTypes } from "./types"
import * as actions from "./actions";
import api from "../../service/api";
import { push } from "connected-react-router";

export function* voteQuestion(action: ReturnType<typeof actions.choiceVoteRequested>) {
  try {
    const res = yield call(api.postChoice, action.payload.url);
    yield put(actions.choiceVoteSucceeded(res.data));
  } catch (err) {
    yield put(actions.choiceVoteFailed(err));
  }
}

export function* fetchQuestion(action: ReturnType<typeof actions.fetchQuestionRequested>) {
  try {
    const res = yield call(api.getQuestion, action.payload.id);
    yield put(actions.fetchQuestionSucceeded(res.data));
  } catch (err) {
    yield put(actions.fetchQuestionFailed(err));
  }
}

export function* fetchQuestions() {
  try {
    const res = yield call(api.getQuestions);
    yield put(actions.fetchQuestionsSucceeded(res.data));
  } catch (err) {
    yield put(actions.fetchQuestionsFailed(err));
  }
}

export function* showDetail(action: ReturnType<typeof actions.showDetail>) {
  yield put(push(action.payload.url));
}

function* sagas() {
  yield all([
    takeLatest(QuestionsActionTypes.QUESTION_SHOW_DETAIL, showDetail),
    takeLatest(QuestionsActionTypes.QUESTION_CHOICE_VOTE_REQUESTED, voteQuestion),
    takeLatest(QuestionsActionTypes.QUESTION_FETCH_REQUESTED, fetchQuestion),
    takeLatest(QuestionsActionTypes.QUESTIONS_FETCH_REQUESTED, fetchQuestions)
  ]);
}

export default sagas;
