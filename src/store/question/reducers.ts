import { Reducer } from 'redux'
import { Question, QuestionsActionTypes, QuestionsState } from "./types";
import { Choice } from "../choice/types";

export const initialState: QuestionsState = {
  loading: false,
  activeQuestion: undefined,
  items: [],
  errors: undefined
};

const getTotalVotes = (question: Question) => {
  return question.choices.reduce((total, choice) => total + choice.votes, 0);
};

const updateChoice = (question: Question, newChoice: Choice) => {
  return question.choices.map(
    choice => (choice.url === newChoice.url ? newChoice : choice)
  );
};

const reducer: Reducer<QuestionsState> = (state = initialState, action) => {
  switch (action.type) {
    case QuestionsActionTypes.QUESTION_FETCH_SUCCEEDED:
      const question = action.payload;
      return {
        ...state,
        activeQuestion: {
          total: getTotalVotes(question),
          selectedChoice: undefined,
          ...question
        }
      };
    case QuestionsActionTypes.QUESTION_CHOICE_VOTE_SUCEEDED:
      const choice = action.payload;
      return {
        ...state,
        activeQuestion: {
          ...state.activeQuestion,
          total: getTotalVotes(<Question>state.activeQuestion),
          choices: updateChoice(<Question>state.activeQuestion, choice),
          selectedChoice: undefined
        }
      };
    case QuestionsActionTypes.QUESTION_CHOICE_SELECTED:
      return {
        ...state,
        activeQuestion: {
          ...state.activeQuestion,
          selectedChoice: action.payload
        }
      };
    case QuestionsActionTypes.QUESTIONS_FETCH_SUCCEEDED:
      return { ...state, items: action.payload };
    case QuestionsActionTypes.QUESTION_SHOW_DETAIL:
      return {
        ...state,
        activeQuestion: undefined
      };
    case QuestionsActionTypes.QUESTION_FETCH_REQUESTED:
    case QuestionsActionTypes.QUESTIONS_FETCH_REQUESTED:
    default:
      return state;
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as questionsReducer }
