import * as React from "react";
interface AppState {
    transformation: {
        [key: string]: unknown;
    };
}
interface AppStateContextProviderProps extends AppState {
    children: React.ReactNode;
}
export declare const AppStateSequenceProvider: React.FC<AppStateContextProviderProps>;
export {};
