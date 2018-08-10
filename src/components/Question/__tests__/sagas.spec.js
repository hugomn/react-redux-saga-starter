import sagas, { fetchQuestions } from "components/Question/sagas";
import { fetchQuestionsSucceeded } from "components/Question/actionCreators";
import { put, takeLatest } from "redux-saga/effects";
import * as actions from "components/Question/actions";
import sagaHelper from "redux-saga-testing";

describe("Question sagas", () => {
  let it = sagaHelper(sagas());
  it("should take lastest fetch questions requested", result => {
    expect(result).toEqual(
      takeLatest(actions.QUESTIONS_FETCH_REQUESTED, fetchQuestions)
    );
  });

  it = sagaHelper(fetchQuestions());
  it("should fetch questions with success", result => {
    expect(result).toEqual(put(fetchQuestionsSucceeded()));
  });
});
