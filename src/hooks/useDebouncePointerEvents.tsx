import { useCallback } from "react";
// @ts-ignore
import debounce from "lodash/debounce";

const useDebouncedPointerEvents = (
  onPointerOver: () => void,
  onPointerDown: () => void,
  onPointerOut: () => void,
  delay: number
) => {
  const debouncedPointerOver = useCallback(debounce(onPointerOver, delay), [
    onPointerOver,
    delay,
  ]);

  const debouncedPointerDown = useCallback(debounce(onPointerDown, delay), [
    onPointerDown,
    delay,
  ]);

  const debouncedPointerOut = useCallback(debounce(onPointerOut, delay), [
    onPointerOut,
    delay,
  ]);

  const handlePointerOver = useCallback(() => {
    debouncedPointerOver();
  }, [debouncedPointerOver]);

  const handlePointerDown = useCallback(() => {
    debouncedPointerDown();
  }, [debouncedPointerDown]);

  const handlePointerOut = useCallback(() => {
    debouncedPointerOut();
  }, [debouncedPointerOut]);

  return {
    onPointerOver: handlePointerOver,
    onPointerDown: handlePointerDown,
    onPointerOut: handlePointerOut,
  };
};

export default useDebouncedPointerEvents;
