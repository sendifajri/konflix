import { useEffect } from "react";
import { useFirstUpdate } from "../hooks/useFirstUpdate";

interface IDelayHandling {
  loadingAction: () => void;
  action: () => void;
  delay?: number;
}
export default function DelayHandling({
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
