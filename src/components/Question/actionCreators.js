import * as actions from "./actions";

export function fetchQuestionRequested(id) {
  return {
    type: actions.QUESTION_FETCH_REQUESTED,
    payload: { id }
  };
}

export function choiceSelected(choice) {
  return {
    type: actions.QUESTION_CHOICE_SELECTED,
    payload: { choice }
  };
}

export function choiceVoteRequested(choice) {
  return {
    type: actions.QUESTION_CHOICE_VOTE_REQUESTED,
    payload: { choice }
  };
}

export function choiceVoteSucceeded(choice) {
  return {
    type: actions.QUESTION_CHOICE_VOTE_SUCEEDED,
    payload: { choice }
  };
}

export function choiceVoteFailed() {
  return {
    type: actions.QUESTION_CHOICE_VOTE_FAILED
  };
}

export function fetchQuestionSucceeded(question) {
  return {
    type: actions.QUESTION_FETCH_SUCCEEDED,
    payload: { question }
  };
}

export function fetchQuestionFailed() {
  return {
    type: actions.QUESTION_FETCH_FAILED
  };
}

export function fetchQuestionsRequested() {
  return {
    type: actions.QUESTIONS_FETCH_REQUESTED
  };
}

export function fetchQuestionsSucceeded(items) {
  return {
    type: actions.QUESTIONS_FETCH_SUCCEEDED,
    payload: { items }
  };
}

export function fetchQuestionsFailed() {
  return {
    type: actions.QUESTIONS_FETCH_FAILED
  };
}

export function showDetail(question) {
  return {
    type: actions.QUESTION_SHOW_DETAIL,
    payload: { question }
  };
}
