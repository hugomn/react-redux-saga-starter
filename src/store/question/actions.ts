import { action } from 'typesafe-actions'
import { QuestionsActionTypes, Question } from "./types";
import { Choice } from "../choice/types";

export const showDetail = (question: Question) => action(QuestionsActionTypes.QUESTION_SHOW_DETAIL, question);

export const choiceSelected = (choice: Choice) => action(QuestionsActionTypes.QUESTION_CHOICE_SELECTED, choice);
export const choiceVoteRequested = (choice: Choice) => action(QuestionsActionTypes.QUESTION_CHOICE_VOTE_REQUESTED, choice);
export const choiceVoteSucceeded = (choice: Choice) => action(QuestionsActionTypes.QUESTION_CHOICE_VOTE_SUCEEDED, choice);
export const choiceVoteFailed = (message: string) => action(QuestionsActionTypes.QUESTION_CHOICE_VOTE_FAILED, message);

export const fetchQuestionRequested = (id: number) => action(QuestionsActionTypes.QUESTION_FETCH_REQUESTED, { id });
export const fetchQuestionSucceeded = (question: Question) => action(QuestionsActionTypes.QUESTION_FETCH_SUCCEEDED, question);
export const fetchQuestionFailed = (message: string) => action(QuestionsActionTypes.QUESTION_FETCH_FAILED, message);

export const fetchQuestionsRequested = () => action(QuestionsActionTypes.QUESTIONS_FETCH_REQUESTED);
export const fetchQuestionsSucceeded = (questions: Question[]) => action(QuestionsActionTypes.QUESTIONS_FETCH_SUCCEEDED, questions);
export const fetchQuestionsFailed = (message: string) => action(QuestionsActionTypes.QUESTIONS_FETCH_FAILED, message);