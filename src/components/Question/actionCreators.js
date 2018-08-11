import {
  QUESTIONS_FETCH_FAILED,
  QUESTIONS_FETCH_REQUESTED,
  QUESTIONS_FETCH_SUCCEEDED
} from "./actions";

export function fetchQuestionsRequested() {
  return {
    type: QUESTIONS_FETCH_REQUESTED
  };
}

export function fetchQuestionsSucceeded(items) {
  return {
    type: QUESTIONS_FETCH_SUCCEEDED,
    payload: { items: items.data }
  };
}

export function fetchQuestionsFailed() {
  return {
    type: QUESTIONS_FETCH_FAILED
  };
}
