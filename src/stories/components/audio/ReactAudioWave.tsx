import * as React from "react";
import { useRef } from "react";
import { Howl, Howler } from "howler";
import { isEmpty } from "lodash";

type IAudioVisualizer = {
  uniqueId: string;
  src: string;
  mute: boolean;
  speed: number;
  visible: boolean;
  waveform?: boolean;
};

const AudioVisualizer = ({ src }: IAudioVisualizer) => {
  //// Refs
  const audioContainerRef = React.useRef<Howl>(null);
  const analyserRef = useRef<AnalyserNode>();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const audioContextRef = React.useRef<AudioContext>(new AudioContext());
  const rafRef = React.useRef<number>(0);
  const audioSourceRef = useRef<MediaElementAudioSourceNode>();

  // state
  const [blobUrl, setBlobUrl] = React.useState<string>("");

  const animate = () => {
    drawCanvas();
    rafRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []); //

  const drawCanvas = React.useCallback(() => {
    if (analyserRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d")!;
      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;
      const analyser = analyserRef.current;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const barWidth = (WIDTH / bufferLength) * 2.5;
      let x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];

        const r = barHeight + 25 * (i / bufferLength);
        const g = 250 * (i / bufferLength);
        const b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
        // console.log("fillRect", x, HEIGHT, barWidth, barHeight);

        x += barWidth + 1;
      }
    }
  }, []);

  React.useEffect(() => {
    console.log("running audio sprite useEffect 4000", src);
    // Clear existing resources if they exist
    const loadAsync = async () => {
      if (!isEmpty(src)) {
        // Fetch and decode the audio file
        const response = await fetch(src);
        const arrayBuffer = await response.arrayBuffer();

        // create URL.createObjectURL from the arrayBuffer;
        const blob = new Blob([arrayBuffer]);
        const url = URL.createObjectURL(blob);
        console.log("blob url created", url);
        setBlobUrl(url);
      }
    };
    loadAsync();
  }, [src]);

  React.useEffect(() => {
    if (!isEmpty(blobUrl)) {
      console.log("running audio sprite useEffect 4002", blobUrl);

      // @ts-ignore
      audioContainerRef.current = new Howl({
        src: [blobUrl],
        format: ["mp3"], // Specify the audio format(s) you're using
        html5: true, // Use HTML5 audio
        autoplay: false,
        loop: false,
        onload: () => {
          console.log("loaded audio sprite");
          if (audioContainerRef.current) {
            // audioContainerRef.current.pause();
            // if (audioSourceRef.current) {
            //   audioSourceRef.current.disconnect();
            // }
            // console.log("audioContainerRef", audioContainerRef.current);
            // console.log("howler context", Howler.ctx);
            // // Create an AudioContext and AnalyserNode
            // analyserRef.current = audioContextRef.current.createAnalyser();
            // analyserRef.current.fftSize = 256;

            // // Connect the Howler.js audio node to the AnalyserNode
            // const audioSource =
            //   audioContextRef.current.createMediaElementSource(
            //     // @ts-ignore
            //     audioContainerRef.current._sounds[0]._node
            //   );
            // audioSource.connect(analyserRef.current);
            // analyserRef.current.connect(audioContextRef.current.destination);
            // audioSourceRef.current = audioSource;

            // Create an AnalyserNode and connect it to the Howler.js audio node
            const analyser = Howler.ctx.createAnalyser();
            analyser.fftSize = 256;

            const gainNode = Howler.ctx.createGain();
            gainNode.gain.value = 1; // Adjust the gain as needed

            // Connect the Howler.js audio node to the AnalyserNode and GainNode
            const audioSource = Howler.ctx.createMediaElementSource(
              // @ts-ignore
              audioContainerRef.current._sounds[0]._node
            );
            audioSource.connect(analyser);
            analyser.connect(gainNode);
            gainNode.connect(Howler.ctx.destination);

            analyserRef.current = analyser;
          }
        },
        onend: () => {
          console.log("end of playing audio sprite");
        },
        onplay: () => {
          console.log("play of playing audio sprite");
          // Start the audio context when the sound plays
          Howler.ctx.resume().then(() => {
            console.log("Audio context resumed");
          });
          //   if (analyserRef.current) {
          //     analyserRef.current.connect(audioContextRef.current!.destination);
          //   }
        },
        onpause: () => {
          console.log("pause of playing audio sprite");
          // if (audioRef.current) {
          //   audioRef.current.pause();
          // }
        },
        onstop: () => {
          console.log("stop of playing audio sprite");
          // if (audioRef.current) {
          //   audioRef.current.pause();
          // }
        },
      });

      // Start the audio context when the sound loads
      Howler.ctx.resume().then(() => {
        console.log("Audio context resumed");
      });

      // Start visualization
      audioContainerRef.current.play();
    }
    return () => {
      // app.loader.reset();
      // reset the audio container ref
      if (audioContainerRef.current) {
        audioContainerRef.current.stop();
        audioContainerRef.current.unload();
      }

      if (analyserRef.current) {
        analyserRef.current.disconnect();
      }

      if (audioSourceRef.current) {
        audioSourceRef.current.disconnect();
      }

      // delete the blocl url on onumount
      if (!isEmpty(blobUrl)) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, [blobUrl]);

  const handlePlay = () => {
    console.log("handlePlay", audioContainerRef.current);
    if (audioContainerRef.current) {
      audioContainerRef.current.play();
    }
  };

  const handlePause = () => {
    if (audioContainerRef.current) {
      audioContainerRef.current.pause();
    }
  };

  return (
    <div>
      {/* <audio ref={audioRef} preload="metadata" src={src}></audio> */}
      <canvas id="canvas" ref={canvasRef} width={600} height={300}></canvas>
      <div>
        <button onClick={handlePlay}>play</button>
        <button onClick={handlePause}>pause</button>
      </div>
    </div>
  );
};

export default AudioVisualizer;
