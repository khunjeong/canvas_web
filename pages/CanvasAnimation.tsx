import React, { RefObject, useEffect, useRef } from 'react';

import useCanvas from '../hooks/useCanvas';

interface ICanvasAnimationProps {
  canvasWidth: number;
  canvasHeight: number;
}

const CanvasAnimation: React.FC<ICanvasAnimationProps> = ({ canvasWidth, canvasHeight }) => {
  const fillBackground = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'rgb(31, 31, 36)';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  const canvasRef: RefObject<HTMLCanvasElement> = useCanvas(
    canvasWidth,
    canvasHeight,
    fillBackground,
  );

  return <canvas ref={canvasRef} />;
};

export default CanvasAnimation;
