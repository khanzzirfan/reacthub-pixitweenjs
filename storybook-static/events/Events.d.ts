import { DependencyList } from "react";
export declare function useCustomEventListener<T>(eventName: string, eventHandler: (data: T) => void, deps?: DependencyList): (el: HTMLElement | null) => void;
export declare function emitCustomEvent<T>(eventName: string, data?: T): void;
export declare function newCustomEventEmitter(): {
    (el: HTMLElement | null): void;
    emit<T>(eventName: string, data?: T | undefined): void;
};
