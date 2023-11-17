import * as React from "react";
interface GsapPixieContextProps {
    gsapCtx: React.MutableRefObject<any>;
    tl: React.MutableRefObject<any>;
    handlePlay: () => void;
    handlePause: () => void;
    handleReset: () => void;
    handleSeek: (value: number) => void;
    handleSeekTest: () => void;
    handleRestart: () => void;
    handleRepeat: () => void;
    playerTimeRef: React.MutableRefObject<number>;
    getTimelineDuration: () => number;
    totalDuration?: number;
    setTotalDuration?: React.Dispatch<React.SetStateAction<number>>;
    reverseModeRef: React.MutableRefObject<boolean>;
    dragModeRef: React.MutableRefObject<boolean>;
    isRemotion: boolean;
    setIsRemotion: React.Dispatch<React.SetStateAction<boolean>>;
}
declare const GsapPixieContext: React.Context<GsapPixieContextProps>;
declare const Events: {
    STOP: string;
    PAUSE: string;
    PLAY: string;
    RESUME: string;
    RESTART: string;
    REPEAT: string;
    SEEK: string;
    RESET: string;
    COMPLETE: string;
    SEEK_START: string;
    SEEK_END: string;
    SCRUBBER_SEEK: string;
    SCRUBBER_PROGRESS_UPDATE: string;
    SCRUBBER_PLAY: string;
    SCRUBBER_PAUSE: string;
    SCRUBBER_CLICKED: string;
    TRANSFORMER_DRAG_START: string;
    TRANSFORMER_DRAG_END: string;
    REVERSE_MODE_START: string;
    REVERSE_MODE_END: string;
};
declare const GsapPixieContextProvider: React.FC<{
    children: React.ReactNode;
}>;
export { GsapPixieContext, GsapPixieContextProvider, Events };
