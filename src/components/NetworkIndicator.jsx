import { useEffect, useState } from "react";
import eventBus from "../core/eventBus";
import { NETWORK_EVENTS } from "../controllers/networkController";

const NetworkIndicator = () => {
  const [status, setStatus] = useState("online");

  useEffect(() => {
    const slow = () => setStatus("slow");
    const offline = () => setStatus("offline");
    const online = () => setStatus("online");

    eventBus.addEventListener(NETWORK_EVENTS.goSlow, slow);
    eventBus.addEventListener(NETWORK_EVENTS.goOffline, offline);
    eventBus.addEventListener(NETWORK_EVENTS.goOnline, online);

    return () => {
      eventBus.removeEventListener(NETWORK_EVENTS.goSlow, slow);
      eventBus.removeEventListener(NETWORK_EVENTS.goOffline, offline);
      eventBus.removeEventListener(NETWORK_EVENTS.goOnline, online);
    };
  }, []);

  const color =
    status === "online" ? "bg-green-500" : status === "slow" ? "bg-yellow-500" : "bg-red-500";

  return (
    <div className={`fixed top-4 right-4 px-3 py-1 rounded text-white ${color}`}>{status}</div>
  );
};

export default NetworkIndicator;
