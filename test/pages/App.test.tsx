import { Amplify } from "aws-amplify";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";

import App from "../../src/App";
import { BrowserRouter } from "react-router-dom";

jest.mock("aws-amplify");

describe("Testing App.tsx", () => {
  beforeEach(() => {
    Amplify.configure({
      Auth: {
        identityPoolId: "abc",
        region: "def",
        userPoolId: "ghi",
        userPoolWebClientId: "jkl",
      },
    });
    const initialState = {
      notifications: {
        notification: {
          open: false,
          message: "",
          type: "success",
        },
      },
      cars: {
        cars: [],
        isLoading: false,
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
  });
  it("Should render the Home page", () => {
    const homeElement = screen.getByText("Home page");
    expect(homeElement).toBeInTheDocument();
  });
});
