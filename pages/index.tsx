import type { NextPage } from 'next';
import { useRef } from 'react';

import useWindowSize from '../hooks/useWindowSize';

import CanvasAnimation from './CanvasAnimation';

const Home: NextPage = () => {
  const mainRef = useRef<HTMLElement>(null);

  const { width, height } = useWindowSize(mainRef);

  return (
    <main ref={mainRef} style={{ width: '100vw', height: '100vh' }}>
      <CanvasAnimation canvasWidth={width} canvasHeight={height} />
    </main>
  );
};

export default Home;
