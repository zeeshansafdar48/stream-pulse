import eventBus from "../core/eventBus";

const VIDEO_EVENTS = {
  playVideo: "video:play",
  pauseVideo: "video:pause"
};

const playVideo = () => eventBus.dispatchEvent(new Event(VIDEO_EVENTS.playVideo));
const pauseVideo = () => eventBus.dispatchEvent(new Event(VIDEO_EVENTS.pauseVideo));

export { playVideo, pauseVideo, VIDEO_EVENTS };
