import * as actionCreators from "components/Question/actionCreators";
import * as actions from "components/Question/actions";

describe("Question actionCreators", () => {
  it("choiceSelected should return the correct action type", () => {
    expect(actionCreators.choiceSelected().type).toEqual(
      actions.QUESTION_CHOICE_SELECTED
    );
  });

  it("fetchQuestionsRequested should return the correct action type", () => {
    expect(actionCreators.fetchQuestionRequested().type).toEqual(
      actions.QUESTION_FETCH_REQUESTED
    );
  });

  it("fetchQuestionsRequested should return the correct action type", () => {
    expect(actionCreators.fetchQuestionsRequested().type).toEqual(
      actions.QUESTIONS_FETCH_REQUESTED
    );
  });

  it("fetchQuestionSucceeded should return the correct action type", () => {
    expect(actionCreators.fetchQuestionSucceeded().type).toEqual(
      actions.QUESTION_FETCH_SUCCEEDED
    );
  });

  it("fetchQuestionsSucceeded should return the correct action type", () => {
    expect(actionCreators.fetchQuestionsSucceeded().type).toEqual(
      actions.QUESTIONS_FETCH_SUCCEEDED
    );
  });

  it("fetchQuestionFailed should return the correct action type", () => {
    expect(actionCreators.fetchQuestionFailed().type).toEqual(
      actions.QUESTION_FETCH_FAILED
    );
  });

  it("fetchQuestionsFailed should return the correct action type", () => {
    expect(actionCreators.fetchQuestionsFailed().type).toEqual(
      actions.QUESTIONS_FETCH_FAILED
    );
  });

  it("choiceVoteFailed should return the correct action type", () => {
    expect(actionCreators.choiceVoteFailed().type).toEqual(
      actions.QUESTION_CHOICE_VOTE_FAILED
    );
  });
  it("choiceVoteRequested should return the correct action type", () => {
    expect(actionCreators.choiceVoteRequested().type).toEqual(
      actions.QUESTION_CHOICE_VOTE_REQUESTED
    );
  });

  it("choiceSelected should return the correct action type", () => {
    expect(actionCreators.choiceSelected().type).toEqual(
      actions.QUESTION_CHOICE_SELECTED
    );
  });

  it("choiceVoteSucceeded should return the correct action type", () => {
    expect(actionCreators.choiceVoteSucceeded().type).toEqual(
      actions.QUESTION_CHOICE_VOTE_SUCEEDED
    );
  });

  it("showDetail should return the correct action type", () => {
    expect(actionCreators.showDetail().type).toEqual(
      actions.QUESTION_SHOW_DETAIL
    );
  });
});
