// Home.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../Home";

test("renders Home component", () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  expect(screen.getByText(/hi! i'm gabriel/i)).toBeInTheDocument();
  expect(screen.getByText(/a full-stack developer/i)).toBeInTheDocument();
  expect(screen.getByText(/take a look at my blog!/i)).toBeInTheDocument();
});

test("renders image with alt text", () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const image = screen.getByAltText("avatar");
  expect(image).toBeInTheDocument();
});

test("renders link to /posts", () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const link = screen.getByRole("link", { name: /take a look at my blog!/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/posts");
});
