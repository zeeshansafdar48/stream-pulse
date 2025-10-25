const PlayerUI = ({ playerRef }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <video
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        width="400"
        controls
        ref={playerRef}
      />
    </div>
  );
};

export default PlayerUI;
