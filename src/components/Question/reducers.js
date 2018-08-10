import {
  QUESTIONS_FETCH_REQUESTED,
  QUESTIONS_FETCH_SUCCEEDED
} from "components/Question/actions";

export const initialState = {
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_FETCH_REQUESTED:
      return { ...state, ...action.payload };
    case QUESTIONS_FETCH_SUCCEEDED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
