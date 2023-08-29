import * as PIXI from "pixi.js";
import "@pixi/events";

/**
 * Removes old listeners and applies the new ones passed in the props
 *
 * @param displayObject - display-object emitting events
 * @param events - object mapping handler prop-names to the fired events
 * @param oldProps - old props. If calling on first props being passed, this should be `{}`.
 * @param newProps - new props.
 */
export function applyEventProps(
  displayObject: PIXI.DisplayObject,
  events: Record<string, string>,
  oldProps: any,
  newProps: any
): void {
  for (const handlerName in events) {
    const oldHandler = oldProps[handlerName];
    const newHandler = newProps[handlerName];
    const event = events[handlerName];

    if (oldHandler !== newHandler) {
      if (oldHandler) {
        // @ts-ignore
        displayObject.removeEventListener(event, oldHandler);
      }

      if (newHandler) {
        // @ts-ignore
        displayObject.addEventListener(event, newHandler);
      }
    }
  }
}
