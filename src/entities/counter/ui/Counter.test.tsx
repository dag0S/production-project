import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("test render", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
        user: {},
        scrollSave: { scroll: {} },
      },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("decrement", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
        user: {},
        scrollSave: { scroll: {} },
      },
    });
    fireEvent.click(screen.getByTestId("decrement-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });

  test("increment", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
        user: {},
        scrollSave: { scroll: {} },
      },
    });
    fireEvent.click(screen.getByTestId("increment-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });
});
