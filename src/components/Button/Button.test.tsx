import React from "react";
import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Button from "./Button";

describe(Button, () => {

  // test 1
  test("Button component renders and is visible", () => {
    render(<Button text = "Click Me" type = "button" />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  })

  // test 2
  test("Button styling changes in disabled state", () => {
    render(<Button text = "Click Me" type = "button" disabled = {true} />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  })
})