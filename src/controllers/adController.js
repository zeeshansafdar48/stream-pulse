import eventBus from "../core/eventBus";

const AD_EVENTS = {
  showAd: "ad:show",
  updateAd: "ad:update",
  closeAd: "ad:close"
};

const showAd = (payload) => {
  return eventBus.dispatchEvent(new CustomEvent(AD_EVENTS.showAd, { detail: payload }));
};

const updateAd = (payload) =>
  eventBus.dispatchEvent(new CustomEvent(AD_EVENTS.updateAd, { detail: payload }));
const closeAd = () => eventBus.dispatchEvent(new Event(AD_EVENTS.closeAd));

export { AD_EVENTS, showAd, updateAd, closeAd };
