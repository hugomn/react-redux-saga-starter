import React from "react";
import App from "components/App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";

const initialState = {
  questions: {}
};

describe("App template", () => {
  const mockInit = jest.fn();
  const store = configureStore()(initialState);
  let wrapper = mount(
    <Provider store={store}>
      <App init={mockInit} />
    </Provider>
  );

  it("renders main App container correctly", () => {
    expect(wrapper.find(App)).toHaveLength(1);
  });

  it("has a main div with 'App' class", () => {
    expect(
      wrapper
        .find("div")
        .first()
        .hasClass("App")
    ).toBeTruthy();
  });
});
