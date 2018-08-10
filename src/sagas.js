import { all, fork } from "redux-saga/effects";
import questionSaga from "components/Question/sagas";

export default function* root() {
  yield all([fork(questionSaga)]);
}
