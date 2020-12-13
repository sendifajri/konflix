import { useLayoutEffect, useRef } from "react";

export const useFirstUpdate = () => {
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
  });
  return firstUpdate.current;
};
