// your Stage:
// the context bridge:
import * as React from "react";

const ContextBridge = <T,>({
  children,
  Context,
  render,
}: {
  children: React.ReactNode;
  Context: React.Context<T>;
  render: (children: React.ReactNode) => JSX.Element;
}) => {
  return (
    <Context.Consumer>
      {(value) => {
        return render(
          <Context.Provider value={value}>{children}</Context.Provider>,
        );
      }}
    </Context.Consumer>
  );
};

export default ContextBridge;
