import { QUESTIONS_FETCH_REQUESTED } from "./actions";

export function fetchQuestions() {
  return {
    type: QUESTIONS_FETCH_REQUESTED,
    payload: {}
  };
}
