import * as React from 'react'
import App from ".";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";

const initialState = {
  questions: {}
};

describe("App template", () => {
  const mockInit = jest.fn();
  const store = configureStore()(initialState);
  let wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <App init={mockInit} />
      </MemoryRouter>
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
