import React, { RefObject, useEffect, useRef } from 'react';

import useCanvas from '../hooks/useCanvas';

interface ICanvasAnimationProps {
  canvasWidth: number;
  canvasHeight: number;
}

const CanvasAnimation: React.FC<ICanvasAnimationProps> = ({ canvasWidth, canvasHeight }) => {
  const canvasRef: RefObject<HTMLCanvasElement> = useCanvas(canvasWidth, canvasHeight);

  return <canvas ref={canvasRef} />;
};

export default CanvasAnimation;
