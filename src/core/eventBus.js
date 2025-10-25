/*
EventTarget is a built-in browser class (same thing used by DOM elements, window, etc.).
It supports methods like:
.addEventListener(eventName, callback)
.removeEventListener(eventName, callback)
.dispatchEvent(eventObject)
👉 So here, eventBus acts as a global object that can emit and listen to events.
*/

const eventBus = new EventTarget();

const originalDispatch = eventBus.dispatchEvent.bind(eventBus);

eventBus.dispatchEvent = (event) => {
  console.log(`[EVENT BUS] ${event.type}`, event.detail || "");
  return originalDispatch(event);
};
/* 
We store the original .dispatchEvent function.
Then we override the .dispatchEvent to add our own logic, in this case the console logs, for debugging purpose. At the end we return the originalDispatch function by calling it, so that the original Dispatch function (dispatchEvent) will work
.bind(eventBus) ensures this inside that method still refers to our eventBus.

*/

export default eventBus;

/*
Now, whenever you call:
eventBus.dispatchEvent(new CustomEvent("user:login", { detail: { userId: 42 } }));

You’ll see this log in the console:
[EVENT BUS] user:login { userId: 42 }

So it’s a debug layer that helps visualize what’s happening in your event-driven system — super useful as your app scales.
*/
