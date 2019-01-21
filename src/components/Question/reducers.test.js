import reducer, { initialState } from "components/Question/reducers";
import {
  QUESTIONS_FETCH_REQUESTED,
  QUESTIONS_FETCH_SUCCEEDED
} from "components/Question/actions";

const mockItems = [
  {
    url: "/questions/10",
    choices: [
      {
        votes: 363,
        url: "/questions/10/choices/70",
        choice: "Shooter"
      }
    ]
  }
];

describe("Question reducer", () => {
  it("should call fetch requested action without changing the state", () => {
    const state = reducer(initialState, { type: QUESTIONS_FETCH_REQUESTED });
    expect(state).toEqual(initialState);
  });

  it("should update the state with new questions when fetch succeeded", () => {
    const state = reducer(initialState, {
      type: QUESTIONS_FETCH_SUCCEEDED,
      payload: { items: mockItems }
    });
    expect(state).toEqual({ ...initialState, items: mockItems });
  });

  it("should return the initial state in case of an unmapped action type", () => {
    const state = reducer(initialState, {
      type: "UNKNOWN",
      payload: { items: "xyz" }
    });
    expect(state).toEqual(initialState);
  });

  it("should return the initial state in case any action is passed", () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });
});
