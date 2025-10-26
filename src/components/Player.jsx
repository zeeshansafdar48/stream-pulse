import { useState, useEffect, useRef } from "react";
import PlayerButton from "../components/PlayerButton";
import PlayerUI from "../components/PlayerUI";
import eventBus from "../core/eventBus";
import { VIDEO_EVENTS } from "../controllers/videoController";

const PlayerComponent = () => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef();

  useEffect(() => {
    const onPlay = () => {
      setPlaying(true);
      playerRef.current.play();
    };
    const onPause = () => {
      setPlaying(false);
      playerRef.current.pause();
    };

    eventBus.addEventListener(VIDEO_EVENTS.playVideo, onPlay);
    eventBus.addEventListener(VIDEO_EVENTS.pauseVideo, onPause);

    return () => {
      eventBus.removeEventListener(VIDEO_EVENTS.playVideo, onPlay);
      eventBus.removeEventListener(VIDEO_EVENTS.pauseVideo, onPause);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <PlayerUI playerRef={playerRef} />
      <PlayerButton playing={playing} />
    </div>
  );
};

export default PlayerComponent;
