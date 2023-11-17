import * as React from "react";
interface AppState {
    transformation: {
        [key: string]: unknown;
    };
}
interface AppStateContextProviderProps extends AppState {
    children: React.ReactNode;
}
export declare const AppStateContextProvider: React.FC<AppStateContextProviderProps>;
export {};
