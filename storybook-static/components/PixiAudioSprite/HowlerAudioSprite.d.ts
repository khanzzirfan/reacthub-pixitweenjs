import { Howl } from "howler";
interface HowlerAudioPlayerProps {
    src: string;
    start: number;
    end: number;
}
interface IHowlerAudioPlayer {
    sound: Howl | null;
    isPlaying: boolean;
    currentTime: number;
    handlePause: () => void;
    handlePlay: () => void;
    togglePlay: () => void;
    handleSeek: (newTime: number) => void;
    playFromTime: (time: number) => void;
}
type UseHowlerAudioPlayer = (props: HowlerAudioPlayerProps) => IHowlerAudioPlayer;
declare const useHowlerAudioPlayer: UseHowlerAudioPlayer;
export default useHowlerAudioPlayer;
