import useHowlerAudioPlayer from "../../components/PixiAudioSprite/HowlerAudioSprite";

function TestAudioFiles() {
  const {
    isPlaying,
    currentTime,
    togglePlay,
    handleSeek,
    handlePlay,
    playFromTime,
  } = useHowlerAudioPlayer({
    //src: "https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2F7M7ixuYvwQ%2Fsingle-speaker-speech-audio.mp3",
    src: "https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Ftik4DkVw_V%2Fpenguins-audio_1-8.MP3",
    start: 0,
    end: 10,
  });

  return (
    <div>
      <div>
        {isPlaying ? "Playing" : "Paused"} at {currentTime.toFixed(2)} seconds
      </div>
      <input
        type="range"
        min="0"
        max={30}
        step="0.01"
        value={currentTime}
        onChange={(e) => handleSeek(parseFloat(e.target.value))}
      />
      <div>
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        <button
          onClick={() => {
            handleSeek(0);
            handlePlay();
          }}
        >
          Restart
        </button>
        <button
          onClick={() => {
            handleSeek(6);
            handlePlay();
          }}
        >
          Seek(6ms)
        </button>

        <button
          onClick={() => {
            playFromTime(6);
          }}
        >
          PlayFrom(6ms)
        </button>
      </div>
    </div>
  );
}

export default TestAudioFiles;
