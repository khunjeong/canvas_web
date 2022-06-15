import React, { RefObject, useEffect, useRef } from 'react';

import useCanvas from '../hooks/useCanvas';

import { ILightSource, LightSource } from '../utils/lightSource';

interface ICanvasAnimationProps {
  canvasWidth: number;
  canvasHeight: number;
}

const CanvasAnimation: React.FC<ICanvasAnimationProps> = ({ canvasWidth, canvasHeight }) => {
  const fillBackground = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'rgb(31, 31, 36)';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  const lightSource: ILightSource = new LightSource(canvasWidth, canvasHeight);

  const animate = (ctx: CanvasRenderingContext2D) => {
    fillBackground(ctx);
    lightSource.drawGradation(ctx);
    lightSource.drawLightSource(ctx);
  };

  console.log(lightSource);
  const canvasRef: RefObject<HTMLCanvasElement> = useCanvas(canvasWidth, canvasHeight, animate);

  return <canvas ref={canvasRef} />;
};

export default CanvasAnimation;
