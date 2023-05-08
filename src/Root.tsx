import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './_common/footer';
import Navigator from './_common/navigator';
;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Root = (): JSX.Element => {
  const { pathname } = useLocation();

  React.useEffect(() => window.scrollTo(0, 0), [pathname]);

  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'green',
              color: 'white',
            },
          },
          error: {
            style: {
              background: 'red',
              color: 'white',
            },
          },
        }} />
      <Container>
        <Navigator/>
        <Outlet/>
        <Footer/>
      </Container>
    </>
  );
};

export default Root;