import AdDisplayUI from "./components/AdDisplayUI";
import NetworkIndicator from "./components/NetworkIndicator";
import PlayerComponent from "./components/Player";
import { closeAd, showAd, updateAd } from "./controllers/adController";
import { goOffline, goOnline, goSlow } from "./controllers/networkController";

function App() {
  return (
    <>
      <PlayerComponent />
      <AdDisplayUI />
      <NetworkIndicator />
      <div className="mt-10">
        <button onClick={() => showAd({ progress: 0 })}>Show Ad</button>
        <button onClick={() => updateAd({ progress: 10 })}>Update Ad</button>
        <button onClick={() => closeAd()}>Close Ad</button>
      </div>
      <div className="mt-10">
        <button onClick={() => goOffline()}>Go Offline</button>
        <button onClick={() => goSlow()}>Go Slow</button>
        <button onClick={() => goOnline()}>Go Online</button>
      </div>
    </>
  );
}

export default App;
