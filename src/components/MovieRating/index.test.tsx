/* eslint-disable no-sequences */

import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";
import MovieRating from ".";

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

it("MovieRating should return rating and votes", () => {
  act(() => {
    render(<MovieRating votes="16,000" rating="8.2" />, container)
  })

  const movieRating = document.querySelector('[data-testid=movie-rating]')
  expect(movieRating?.textContent).toBe("8.2")


  const movieVotes = document.querySelector('[data-testid=movie-votes]')
  expect(movieVotes?.textContent).toBe("16,000")


})
