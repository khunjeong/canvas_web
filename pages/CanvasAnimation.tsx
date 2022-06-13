import React, { RefObject, useEffect, useRef } from 'react';

interface ICanvasAnimationProps {
  canvasWidth: number;
  canvasHeight: number;
}

const CanvasAnimation: React.FC<ICanvasAnimationProps> = ({ canvasWidth, canvasHeight }) => {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const setCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio ?? 1;

      if (canvas && ctx) {
        canvas.style.width = canvasWidth + 'px';
        canvas.style.height = canvasHeight + 'px';
        canvas.width = canvasWidth * devicePixelRatio;
        canvas.height = canvasHeight * devicePixelRatio;

        ctx.scale(devicePixelRatio, devicePixelRatio);
      }
    };
    setCanvas();
  }, [canvasWidth, canvasHeight]);

  return <canvas ref={canvasRef} />;
};

export default CanvasAnimation;
