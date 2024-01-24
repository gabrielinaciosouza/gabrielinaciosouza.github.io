import React from "react";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import App from "./App";

test("renders App component", () => {
  render(<App />);

  expect(screen.getByText("Gabriel's Blog")).toBeInTheDocument();
  expect(screen.getByText("👋 Hi! I'm Gabriel")).toBeInTheDocument();
});
