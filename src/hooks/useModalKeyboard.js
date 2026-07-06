import { useEffect } from "react";

export default function useModalKeyboard({
  onEscape,
  onEnter,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onEscape?.();
      }

      if (e.key === "Enter") {
        onEnter?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [onEscape, onEnter]);
}