import React from "react";
import ReactDOM from "react-dom";
import App from "components/App/template";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";

const initialState = {
  questions: {}
};

const mockStore = configureStore();
let store;

beforeEach(() => {
  store = mockStore(initialState);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  const mockInit = jest.fn();
  let wrapper = mount(
    <Provider store={store}>
      <App init={mockInit} />
    </Provider>
  );
  ReactDOM.render(wrapper, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(true).toBeTruthy();
});
