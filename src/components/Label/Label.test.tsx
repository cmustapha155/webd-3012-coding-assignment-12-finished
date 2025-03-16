import React from "react";
import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Label from "./Label";

describe(Label, () => {

  // test 1
  test("Label component renders and is visible", () => {
    render(<Label text = "Label Text" htmlFor = "input-field" />);

    // by default labels require an input element to be tied to in order to pass tests
    render(<input id = "input-field"/>);

    const label = screen.getByLabelText("Label Text");
    expect(label).toBeInTheDocument();
    expect(label).toBeVisible();
  })
})