import * as React from "react";
import { useContext } from "react";
import { GsapPixieContext } from "../../providers/GsapPixieContextProvider";

// delcare props for timeline
export interface PixiSequenceWrapperProps {
  children: React.ReactNode;
  /** start time of the total sequence in seconds */
  startAt: number;
  /** end time of the last sequence in seconds. It is end of global timeline seconds */
  endAt: number;
}

export const PixiSequenceWrapper = (props: PixiSequenceWrapperProps) => {
  const { startAt, endAt } = props;
  //// Context
  const { setTotalDuration } = useContext(GsapPixieContext);
  React.useEffect(() => {
    if (setTotalDuration) {
      // add some buffer to the end
      setTotalDuration(Number(endAt) + 0.2);
    }
  }, [startAt, endAt]);

  return props.children;
};
