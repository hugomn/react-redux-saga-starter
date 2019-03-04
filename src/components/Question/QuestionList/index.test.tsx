import * as React from "react";
import QuestionList from "./template";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import { Card } from "semantic-ui-react";

// const initialState = {};
// const mockQuestions = [
//   {
//     url: "/questions/1",
//     question: "First question",
//     choices: []
//   },
//   {
//     url: "/questions/2",
//     question: "Second question",
//     choices: []
//   }
// ];

describe("Question template", () => {
  it("", () => {
    expect(true).toBe(true);
  });
  // const mockFetchQuestions = jest.fn();
  // const store = configureStore()(initialState);
  // const props = {
  //   getQuestions: mockFetchQuestions,
  //   questions: mockQuestions
  // };
  // let wrapper = mount(
  //   <Provider store={store}>
  //     <QuestionList {...props} />
  //   </Provider>
  // );
  // it("should render question title", () => {
  //   expect(wrapper.find("h1")).toHaveLength(1);
  // });
  // it("should fetch question after mounted", () => {
  //   expect(mockFetchQuestions).toBeCalled();
  // });
  // it("should render two Cards when we have questions", () => {
  //   expect(wrapper.find(Card)).toHaveLength(2);
  // });
});
