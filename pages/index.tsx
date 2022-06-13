import type { NextPage } from 'next';
import { useRef } from 'react';

import styled from 'styled-components';

import useWindowSize from '../hooks/useWindowSize';

import CanvasAnimation from './CanvasAnimation';

const Home: NextPage = () => {
  const mainRef = useRef<HTMLElement>(null);

  const { width, height } = useWindowSize(mainRef);

  return (
    <Main ref={mainRef}>
      <CanvasAnimation canvasWidth={width} canvasHeight={height} />
    </Main>
  );
};

export default Home;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;
