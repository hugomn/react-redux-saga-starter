import { all, fork } from "redux-saga/effects";

import questionSaga from "./question/saga";

export default function* root() {
  yield all([fork(questionSaga)]);
}
