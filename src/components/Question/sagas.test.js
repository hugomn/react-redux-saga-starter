import sagas, {
  fetchQuestion,
  fetchQuestions,
  voteQuestion,
  showDetail
} from "components/Question/sagas";
import { fetchQuestionsFailed } from "components/Question/actionCreators";
import { all, call, takeLatest, put } from "redux-saga/effects";
import * as actions from "components/Question/actions";
import sagaHelper from "redux-saga-testing";
import api from "service/api";

describe("Question sagas", () => {
  let it = sagaHelper(sagas());
  it("should take lastest fetch questions requested", result => {
    expect(result).toEqual(
      all([
        takeLatest(actions.QUESTION_SHOW_DETAIL, showDetail),
        takeLatest(actions.QUESTION_CHOICE_VOTE_REQUESTED, voteQuestion),
        takeLatest(actions.QUESTION_FETCH_REQUESTED, fetchQuestion),
        takeLatest(actions.QUESTIONS_FETCH_REQUESTED, fetchQuestions)
      ])
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
