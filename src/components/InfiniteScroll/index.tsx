import React, { createRef, useEffect } from "react";

interface InfiniteScrollProps {
  children: React.ReactNode;
  loadMore: () => void;
  minItem: number;
  disable?: boolean;
}

const InfiniteScroll = ({
  children,
  loadMore,
  minItem,
  disable,
}: InfiniteScrollProps) => {
  const scrollRef = createRef<HTMLDivElement>();

  const isBottom = () => {
    const bounding = scrollRef.current?.getBoundingClientRect().bottom;
    if (bounding) {
      return bounding - 40 <= window.innerHeight;
    }
    return false;
  };

  const countItems = () => {
    const items = document.getElementsByClassName("page-items");
    return items.length >= minItem;
  };

  const trackScrolling = () => {
    if (disable) {
      return false;
    }
    if (!isBottom() || !countItems()) {
      return false;
    }
    loadMore();
  };

  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  });

  return (
    <div
      className="infinite-scroll"
      ref={scrollRef}
      data-testid="infiniteScroll"
    >
      {children}
    </div>
  );
};

export default InfiniteScroll;
