import {
  fetchQuestionsRequested,
  fetchQuestionsSucceeded,
  fetchQuestionsFailed
} from "components/Question/actionCreators";
import * as actions from "components/Question/actions";

describe("Question actionCreators", () => {
  it("fetchQuestionsRequested should return the correct action type", () => {
    expect(fetchQuestionsRequested.type).toEqual(
      actions.FETCH_QUESTIONS_REQUESTED
    );
  });
});
