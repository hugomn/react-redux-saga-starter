import { put, takeLatest } from "redux-saga/effects";

import * as actions from "./actions";

let defaultState = {
  questions: []
};

function* fetchQuestions() {
  // Call api
  yield put({
    type: actions.QUESTIONS_FETCH_SUCCEEDED,
    payload: {
      ...defaultState,
      questions: [
        {
          published_at: "2015-05-27T21:22:26.431000+00:00",
          url: "/questions/1"
        }
      ]
    }
  });
}

export default function* sagas() {
  yield takeLatest(actions.QUESTIONS_FETCH_REQUESTED, fetchQuestions);
}
