import { useEffect } from "react";
import { useFirstUpdate } from "./useFirstUpdate";

interface IDelayHandling {
  loadingAction: () => void;
  action: () => void;
  delay?: number;
}
export default function useDelay({
  loadingAction,
  action,
  delay,
}: IDelayHandling) {
  const firstUpdate = useFirstUpdate();
  useEffect(() => {
    if (firstUpdate) {
      action();
      return;
    }
    loadingAction();
    const timeout = setTimeout(() => action(), delay || 500);
    return () => clearTimeout(timeout);
  }, [action, delay, firstUpdate, loadingAction]);
}
