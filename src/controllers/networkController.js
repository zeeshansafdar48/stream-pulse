import eventBus from "../core/eventBus";

const NETWORK_EVENTS = {
  goOffline: "network:offline",
  goOnline: "network:online",
  goSlow: "network:slow"
};

const goOffline = () => eventBus.dispatchEvent(new Event(NETWORK_EVENTS.goOffline));
const goOnline = () => eventBus.dispatchEvent(new Event(NETWORK_EVENTS.goOnline));
const goSlow = () => eventBus.dispatchEvent(new Event(NETWORK_EVENTS.goSlow));

export { NETWORK_EVENTS, goOffline, goOnline, goSlow };
