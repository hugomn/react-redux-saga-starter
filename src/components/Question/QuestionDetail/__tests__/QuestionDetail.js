import React from "react";
import QuestionDetail from "components/Question/QuestionDetail/template";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import { Table, Loader } from "semantic-ui-react";

const initialState = {};
const mockQuestion = {
  url: "/questions/1",
  question: "First question",
  choices: [
    {
      url: "/questions/1/choice/1",
      choice: "First choice",
      votes: 1000
    }
  ]
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

  it("should render two Table.Row when we have one question (one for the actions)", () => {
    expect(wrapper.find(Table.Row)).toHaveLength(2);
  });

  it("should display correctly the number of votes", () => {
    expect(
      wrapper
        .find(Table.Cell)
        .at(2)
        .text()
    ).toEqual(mockQuestion.choices[0].votes + " votes");
  });

  it("should call selectChoice when choice row is clicked", () => {
    wrapper
      .find(Table.Row)
      .at(0)
      .simulate("click");
    expect(mockSelectChoice).toBeCalled();
  });

  it("should not call choiceVote when vote button is is clicked without a selected choice", () => {
    wrapper
      .find(Table.Footer)
      .find("button")
      .at(0)
      .simulate("click");
    expect(mockChoiceVote).not.toBeCalled();
  });

  it("should not call choiceVote when vote button is is clicked without a selected choice", () => {
    let selectedProps = {
      ...props,
      activeQuestion: {
        ...props.activeQuestion,
        selectedChoice: mockQuestion.choices[0]
      }
    };
    let wrapper = mount(
      <Provider store={store}>
        <QuestionDetail {...selectedProps} />
      </Provider>
    );

    wrapper
      .find(Table.Footer)
      .find("button")
      .at(0)
      .simulate("click");
    expect(mockChoiceVote).toBeCalled();
  });

  it("should render Loader when there's no active question", () => {
    let loaderProps = {
      ...props,
      activeQuestion: undefined
    };
    let wrapper = mount(
      <Provider store={store}>
        <QuestionDetail {...loaderProps} />
      </Provider>
    );

    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
