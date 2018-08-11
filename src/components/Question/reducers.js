import * as actions from "components/Question/actions";

export const initialState = {
  items: []
};

const getTotalVotes = question => {
  return question.choices.reduce((total, choice) => total + choice.votes, 0);
};

const updateChoice = (choices, newChoice) => {
  return choices.map(
    choice => (choice.url === newChoice.url ? newChoice : choice)
  );
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.QUESTION_FETCH_SUCCEEDED:
      const question = action.payload.question;
      return {
        ...state,
        activeQuestion: {
          total: getTotalVotes(question),
          selectedChoice: undefined,
          ...question
        }
      };
    case actions.QUESTION_CHOICE_VOTE_SUCEEDED:
      const choice = action.payload.choice;
      return {
        ...state,
        activeQuestion: {
          ...state.activeQuestion,
          total: getTotalVotes(state.activeQuestion),
          choices: updateChoice(state.activeQuestion.choices, choice),
          selectedChoice: undefined
        }
      };
    case actions.QUESTION_CHOICE_SELECTED:
      return {
        ...state,
        activeQuestion: {
          ...state.activeQuestion,
          selectedChoice: action.payload.choice
        }
      };
    case actions.QUESTIONS_FETCH_SUCCEEDED:
      return { ...state, ...action.payload };
    case actions.QUESTION_SHOW_DETAIL:
      return {
        ...state,
        activeQuestion: undefined
      };
    case actions.QUESTION_FETCH_REQUESTED:
    case actions.QUESTIONS_FETCH_REQUESTED:
    default:
      return state;
  }
};

export default reducer;
