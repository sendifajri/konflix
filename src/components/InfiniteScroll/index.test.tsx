import React from "react";
import { fireEvent, render } from "@testing-library/react";
import InfiniteScroll from "./";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";

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

it("loadmore should be trigger", () => {
  const loadMore = jest.fn();
  act(() => {
    render(
      <InfiniteScroll loadMore={loadMore} minItem={10}>
        <div className="test-list">test</div>
        <div className="test-list">test</div>
        <div className="test-list">test</div>
        <div className="test-list">test</div>
        <div className="test-list">test</div>
        <div className="test-list">test</div>
        <div className="test-list">test</div>
        <div className="test-list">test</div>
        <div className="test-list">test</div>
        <div className="test-list">test</div>
      </InfiniteScroll>,
      container
    );
  });

  const infiniteScroll = document.querySelector("[data-testid=infiniteScroll]");
  expect(infiniteScroll?.childElementCount).toBe(10);

  if (infiniteScroll) {
    infiniteScroll.addEventListener("scroll", () => loadMore());
    act(() => {
      fireEvent.scroll(infiniteScroll, { target: { scrollY: 1 } });
    });
  }
  expect(loadMore).toHaveBeenCalledTimes(1);
});
