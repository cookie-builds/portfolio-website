import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './_common/footer';
import Navigator from './_common/navigator'; ;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Root = (): JSX.Element => {
  return (
    <Container>
      <Navigator />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Root;