import * as React from "react";
interface FadeInProps {
    children: React.ReactNode;
    vars: {
        duration: number;
        ease: string;
    };
    effect?: "pluse" | "bouncein" | "spin";
}
declare function FadeIn(props: FadeInProps): import("react/jsx-runtime").JSX.Element;
export { FadeIn };
