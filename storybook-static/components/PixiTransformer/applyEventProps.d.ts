import * as PIXI from "pixi.js";
/**
 * Removes old listeners and applies the new ones passed in the props
 *
 * @param displayObject - display-object emitting events
 * @param events - object mapping handler prop-names to the fired events
 * @param oldProps - old props. If calling on first props being passed, this should be `{}`.
 * @param newProps - new props.
 */
export declare function applyEventProps(displayObject: PIXI.DisplayObject, events: Record<string, string>, oldProps: any, newProps: any): void;
