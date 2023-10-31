import { useEffect, useRef } from "react";
// @ts-ignore
import isEqual from "lodash/isEqual";

const useDeepEffect = (effectFunc: any, deps: any[]) => {
  const isFirst = useRef(true);
  const prevDeps = useRef(deps);
  useEffect(() => {
    const isSame = prevDeps.current.every((obj, index) =>
      isEqual(obj, deps[index])
    );
    if (isFirst.current || !isSame) {
      effectFunc();
    }
    isFirst.current = false;
    prevDeps.current = deps;
  }, deps);
};

export default useDeepEffect;
