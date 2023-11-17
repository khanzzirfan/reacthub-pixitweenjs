import * as React from "react";
declare const ContextBridge: <T>({ children, Context, render, }: {
    children: React.ReactNode;
    Context: React.Context<T>;
    render: (children: React.ReactNode) => JSX.Element;
}) => import("react/jsx-runtime").JSX.Element;
export default ContextBridge;
