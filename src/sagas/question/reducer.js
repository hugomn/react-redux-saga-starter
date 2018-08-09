import * as action from "./actions";

export const fetchQuestions = () => {
  return {
    type: action.QUESTIONS_FETCH_REQUESTED,
    payload: {}
  };
};

const ACTION_HANDLERS = {
  [action.QUESTIONS_FETCH_REQUESTED]: (state, action) => {
    return { ...state, ...action.payload };
  },
  [action.QUESTIONS_FETCH_SUCCEEDED]: (state, action) => {
    return { ...state, ...action.payload, hugo: true };
  }
};

let defaultState = {};

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
