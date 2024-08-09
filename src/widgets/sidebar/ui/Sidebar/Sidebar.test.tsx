import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";

import styles from "./Sidebar.module.scss";

describe("Sidebar test", () => {
  test("test render", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle", () => {
    componentRender(<Sidebar />);

    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass(styles["collapsed"]);
  });
});
