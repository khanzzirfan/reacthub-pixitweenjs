class CustomEventHandler extends EventTarget {
  subscribe(eventName: string, cb: any) {
    window.addEventListener(eventName, cb);
  }
  emit(eventName: string, payload: any) {
    window.dispatchEvent(new CustomEvent(eventName, { detail: payload }));
  }
}
export const EventHandler = new CustomEventHandler();
