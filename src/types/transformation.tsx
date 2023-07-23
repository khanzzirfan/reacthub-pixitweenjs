export interface Transformation {
  x: number;
  y: number;
  width: number;
  height: number;
  rotate: number;
  scale: [number, number];
}

export interface TransformationEnd {
  uniqueId: string;
  transformation: Transformation;
}
