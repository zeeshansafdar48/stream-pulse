import { pauseVideo, playVideo } from "../controllers/videoController";

const PlayerButton = ({ playing }) => {
  return (
    <button
      className="p-10 text-bold border border-1 hover:cursor-pointer"
      onClick={playing ? pauseVideo : playVideo}
    >
      {playing ? "Pause" : "Play"}
    </button>
  );
};

export default PlayerButton;
