import * as actions from "./actions";
import { QuestionsActionTypes } from "./types";
import { Question } from "./types";
import { Choice } from "../choice/types";

const choiceMock: Choice = {
  url: "/questions/1/choice/1",
  choice: "First choice",
  votes: 1000
}

const questionMock: Question = {
  id: 1,
  question: 'Favorite coffee',
  published_at: new Date(),
  url: "/questions/1",
  choices: [],
  total: 10
}

describe("Question actions", () => {
  it("choiceSelected should return the correct action type", () => {
    expect(actions.choiceSelected(choiceMock).type).toEqual(
      QuestionsActionTypes.QUESTION_CHOICE_SELECTED
    );
  });

  it("fetchQuestionsRequested should return the correct action type", () => {
    expect(actions.fetchQuestionRequested(questionMock.id).type).toEqual(
      QuestionsActionTypes.QUESTION_FETCH_REQUESTED
    );
  });

  it("fetchQuestionsRequested should return the correct action type", () => {
    expect(actions.fetchQuestionsRequested().type).toEqual(
      QuestionsActionTypes.QUESTIONS_FETCH_REQUESTED
    );
  });

  it("fetchQuestionSucceeded should return the correct action type", () => {
    expect(actions.fetchQuestionSucceeded(questionMock).type).toEqual(
      QuestionsActionTypes.QUESTION_FETCH_SUCCEEDED
    );
  });

  it("fetchQuestionsSucceeded should return the correct action type", () => {
    expect(actions.fetchQuestionsSucceeded([]).type).toEqual(
      QuestionsActionTypes.QUESTIONS_FETCH_SUCCEEDED
    );
  });

  it("fetchQuestionFailed should return the correct action type", () => {
    expect(actions.fetchQuestionFailed('').type).toEqual(
      QuestionsActionTypes.QUESTION_FETCH_FAILED
    );
  });

  it("fetchQuestionsFailed should return the correct action type", () => {
    expect(actions.fetchQuestionsFailed('').type).toEqual(
      QuestionsActionTypes.QUESTIONS_FETCH_FAILED
    );
  });

  it("choiceVoteFailed should return the correct action type", () => {
    expect(actions.choiceVoteFailed('').type).toEqual(
      QuestionsActionTypes.QUESTION_CHOICE_VOTE_FAILED
    );
  });
  it("choiceVoteRequested should return the correct action type", () => {
    expect(actions.choiceVoteRequested(choiceMock).type).toEqual(
      QuestionsActionTypes.QUESTION_CHOICE_VOTE_REQUESTED
    );
  });

  it("choiceSelected should return the correct action type", () => {
    expect(actions.choiceSelected(choiceMock).type).toEqual(
      QuestionsActionTypes.QUESTION_CHOICE_SELECTED
    );
  });

  it("choiceVoteSucceeded should return the correct action type", () => {
    expect(actions.choiceVoteSucceeded(choiceMock).type).toEqual(
      QuestionsActionTypes.QUESTION_CHOICE_VOTE_SUCEEDED
    );
  });

  it("showDetail should return the correct action type", () => {
    expect(actions.showDetail(questionMock).type).toEqual(
      QuestionsActionTypes.QUESTION_SHOW_DETAIL
    );
  });
});
