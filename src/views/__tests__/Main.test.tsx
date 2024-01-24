// Main.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "../Main";

test("renders Main component", () => {
  render(
    <Router>
      <Main />
    </Router>
  );

  expect(screen.getByText(/gabriel's blog/i)).toBeInTheDocument();
  expect(screen.getByText(/posts/i)).toBeInTheDocument();
  expect(
    screen.getByText(/2024-present © Gabriel Inacio/i)
  ).toBeInTheDocument();
});

test("renders footer text", () => {
  render(
    <Router>
      <Main />
    </Router>
  );

  expect(
    screen.getByText(/2024-present © Gabriel Inacio/i)
  ).toBeInTheDocument();
});
