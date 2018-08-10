import React from "react";
import Question from "components/Question/template";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";

const initialState = {
  questions: {}
};

describe("Question template", () => {
  const mockFetchQuestions = jest.fn();
  const store = configureStore()(initialState);
  const props = {
    fetchQuestions: mockFetchQuestions,
    questions: []
  };
  let wrapper = mount(
    <Provider store={store}>
      <Question {...props} />
    </Provider>
  );

  it("should render question title", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  it("should fetch question after mounted", () => {
    expect(mockFetchQuestions).toBeCalled();
  });
});
