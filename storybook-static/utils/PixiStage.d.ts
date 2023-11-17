import * as React from "react";
interface StageProps {
    children: React.ReactNode;
    width: number;
    height: number;
    options: any;
}
declare const Stage: React.FC<StageProps>;
export default Stage;
