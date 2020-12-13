import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";
import MovieCard from "./";

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

it("MovieCard should return title, year, type and poster's url", () => {
  act(() => {
    render(
      <MovieCard
        Poster="http://batman.png/"
        Title="Batman"
        Type="Movie"
        Year="1998"
        imdbID="12332db"
        search="batman"
      />,
      container
    );
  });

  const movieTitle = document.querySelector("[data-testid=movie-title]");
  expect(movieTitle?.textContent).toBe("Batman");

  const movieYear = document.querySelector("[data-testid=movie-year]");
  expect(movieYear?.textContent).toBe("1998");

  const movieType = document.querySelector("[data-testid=movie-type]");
  expect(movieType?.textContent).toBe("Movie");

  const moviePoster = document.querySelector("[data-testid=movie-poster]")
    ?.childNodes[0] as HTMLImageElement;
  expect(moviePoster?.src).toBe("http://batman.png/");
});
