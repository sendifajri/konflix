/* eslint-disable no-sequences */

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";
import SearchInput from ".";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("SearchInput onChange should be trigger and value must be render", () => {
  const onChange = jest.fn();
  act(() => {
    render(<SearchInput value="Batman" onChange={onChange} />, container)
  })

  const searchInput = document.querySelector("[data-testid=search-input]") as HTMLInputElement
  expect(searchInput?.value).toBe("Batman")

  act(() => {
    fireEvent.change(searchInput, {target: {value: "Spiderman"}})
  })

  expect(onChange).toHaveBeenCalledTimes(1);
})
