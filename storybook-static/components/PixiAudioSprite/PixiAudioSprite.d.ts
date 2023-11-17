import * as React from "react";
type PixiAudioSpriteProps = {
    uniqueId: string;
    src: string;
    startAt: number;
    endAt: number;
    audioStartAt: number;
    audioEndAt: number;
    mute: boolean;
    speed: number;
    visible: boolean;
};
declare const PixiAudioSprite: React.FC<PixiAudioSpriteProps>;
export default PixiAudioSprite;
