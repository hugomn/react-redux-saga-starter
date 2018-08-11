import React from "react";
import QuestionDetail from "components/Question/QuestionDetail/template";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import { Table } from "semantic-ui-react";

const initialState = {};
const mockQuestion = {
  url: "/questions/1",
  question: "First question",
  choices: []
};

describe("Question template", () => {
  const mockGetQuestion = jest.fn();
  const mockChoiceVote = jest.fn();
  const mockSelectChoice = jest.fn();
  const store = configureStore()(initialState);
  const props = {
    getQuestion: mockGetQuestion,
    choiceVote: mockChoiceVote,
    selectChoice: mockSelectChoice,
    activeQuestion: mockQuestion,
    match: {
      params: { id: 1 }
    }
  };
  let wrapper = mount(
    <Provider store={store}>
      <QuestionDetail {...props} />
    </Provider>
  );

  it("should render question title", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  it("should get question after mounted", () => {
    expect(mockGetQuestion).toBeCalled();
  });

  it("should render two Table.Row when we have question", () => {
    expect(wrapper.find(Table.Row)).toHaveLength(1);
  });
});
