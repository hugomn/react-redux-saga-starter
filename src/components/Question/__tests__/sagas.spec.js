import sagas, { fetchQuestions } from "components/Question/sagas";
import { fetchQuestionsFailed } from "components/Question/actionCreators";
import { call, takeLatest, put } from "redux-saga/effects";
import * as actions from "components/Question/actions";
import sagaHelper from "redux-saga-testing";
import api from "utils/api";

describe("Question sagas", () => {
  let it = sagaHelper(sagas());
  it("should take lastest fetch questions requested", result => {
    expect(result).toEqual(
      takeLatest(actions.QUESTIONS_FETCH_REQUESTED, fetchQuestions)
    );
  });

  it = sagaHelper(fetchQuestions());
  it("should call the api", result => {
    expect(result).toEqual(call(api.getQuestions));
  });

  it("should call the fetch failed action", result => {
    expect(result).toEqual(put(fetchQuestionsFailed()));
  });
});
