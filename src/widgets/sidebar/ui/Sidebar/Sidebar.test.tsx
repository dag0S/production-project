import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

import styles from "./Sidebar.module.scss";

describe("Sidebar test", () => {
  test("test render", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle", () => {
    renderWithTranslation(<Sidebar />);

    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass(styles["collapsed"]);
  });
});
