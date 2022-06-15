import React, { RefObject, useEffect, useRef } from 'react';

import useCanvas from '../hooks/useCanvas';

import { ILightSource, LightSource } from '../utils/lightSource';
import { IPointLine, PointLine } from '../utils/pointLine';

interface ICanvasAnimationProps {
  canvasWidth: number;
  canvasHeight: number;
}

const CanvasAnimation: React.FC<ICanvasAnimationProps> = ({ canvasWidth, canvasHeight }) => {
  const fillBackground = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'rgb(31, 31, 36)';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  let points: IPointLine[] = [];
  const initPoints = () => {
    const POINT_NUMBER = 72;
    const POINT_GAP = canvasWidth / POINT_NUMBER;
    for (let i = 0; i <= POINT_NUMBER; i++) {
      const point: IPointLine = new PointLine(POINT_GAP, i, canvasWidth, canvasHeight);
      points.push(point);
    }
  };
  if (canvasWidth !== 0 && canvasHeight !== 0) {
    initPoints();
  }
  const lightSource: ILightSource = new LightSource(canvasWidth, canvasHeight);

  const animate = (ctx: CanvasRenderingContext2D) => {
    fillBackground(ctx);
    lightSource.drawGradation(ctx);
    lightSource.drawLightSource(ctx);

    for (const point of points) {
      lightSource.drawLightLines(ctx, point.pointCenterX, point.pointCenterY);
      point.animate(ctx);
    }
  };

  console.log(lightSource);
  const canvasRef: RefObject<HTMLCanvasElement> = useCanvas(canvasWidth, canvasHeight, animate);

  return <canvas ref={canvasRef} />;
};

export default CanvasAnimation;
