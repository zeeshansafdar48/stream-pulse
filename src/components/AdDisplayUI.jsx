import { useState, useEffect } from "react";
import eventBus from "../core/eventBus";
import { AD_EVENTS } from "../controllers/adController";

const AdDisplayUI = () => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const show = (e) => {
      setOpen(true);
      setProgress(e.detail?.progress || 0);
    };
    const update = (e) => setProgress(e.detail?.progress);
    const close = () => setOpen(false);

    eventBus.addEventListener(AD_EVENTS.showAd, show);
    eventBus.addEventListener(AD_EVENTS.updateAd, update);
    eventBus.addEventListener(AD_EVENTS.closeAd, close);

    return () => {
      eventBus.removeEventListener(AD_EVENTS.showAd, show);
      eventBus.removeEventListener(AD_EVENTS.updateAd, update);
      eventBus.removeEventListener(AD_EVENTS.closeAd, close);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4">
      <p>Ad in Progress: {progress}%</p>
    </div>
  );
};

export default AdDisplayUI;
