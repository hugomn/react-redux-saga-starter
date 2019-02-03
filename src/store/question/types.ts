import { Choice } from "../choice/types";

export interface Question {
  id: number,
  question: string,
  published_at: Date,
  url: string,
  choices: Choice[]
  selectedChoice?: Choice
  total: number
}

export enum QuestionsActionTypes {
  QUESTION_SHOW_DETAIL = '@@questions/QUESTION_SHOW_DETAIL',
  QUESTION_CHOICE_SELECTED = '@@questions/QUESTION_CHOICE_SELECTED',
  QUESTION_CHOICE_VOTE_REQUESTED = '@@questions/QUESTION_CHOICE_VOTE_REQUESTED',
  QUESTION_CHOICE_VOTE_SUCEEDED = '@@questions/QUESTION_CHOICE_VOTE_SUCEEDED',
  QUESTION_CHOICE_VOTE_FAILED = '@@questions/QUESTION_CHOICE_VOTE_FAILED',
  QUESTION_FETCH_REQUESTED = '@@questions/QUESTION_FETCH_REQUESTED',
  QUESTION_FETCH_SUCCEEDED = '@@questions/QUESTION_FETCH_SUCCEEDED',
  QUESTION_FETCH_FAILED = '@@questions/QUESTION_FETCH_FAILED',
  QUESTIONS_FETCH_REQUESTED = '@@questions/QUESTIONS_FETCH_REQUESTED',
  QUESTIONS_FETCH_SUCCEEDED = '@@questions/QUESTIONS_FETCH_SUCCEEDED',
  QUESTIONS_FETCH_FAILED = '@@questions/QUESTIONS_FETCH_FAILED',
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface QuestionsState {
  readonly loading: boolean
  readonly activeQuestion?: Question
  readonly items: Question[]
  readonly errors?: string
}