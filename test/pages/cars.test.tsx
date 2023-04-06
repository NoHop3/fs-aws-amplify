import { renderWithProviders } from "../utils/test-utils";
import { Cars } from "../../src/pages";

let preloadedState: any;
let container: any;

describe("Testing cars.tsx", () => {
  beforeAll(() => {
    preloadedState = {
      cars: {
        isLoading: false,
        cars: [
          {
            id: 1,
            name: "test",
          },
          {
            id: 2,
            name: "test2",
          },
        ],
      },
    };
  });

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("should render _Cars component", () => {
    renderWithProviders(<Cars />, {
      preloadedState,
    });
  });

  it("should render _Cars component with no cars", () => {
    renderWithProviders(<Cars />, {
      preloadedState: {
        cars: {
          isLoading: false,
          cars: [],
        },
      },
    });
  });
});
