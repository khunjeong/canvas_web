export interface ILightSource {
  drawGradation: (ctx: CanvasRenderingContext2D) => void;
  drawLightSource: (ctx: CanvasRenderingContext2D) => void;
  drawLightLines: (
    ctx: CanvasRenderingContext2D,
    pointCenterX: number,
    pointCenterY: number,
  ) => void;
}

export class LightSource implements ILightSource {
  drawGradation(ctx: CanvasRenderingContext2D) {}
  drawLightSource(ctx: CanvasRenderingContext2D) {}
  drawLightLines(ctx: CanvasRenderingContext2D, pointCenterX: number, pointCenterY: number) {}
}
