import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './_common/footer';
import Navigator from './_common/navigator';

const Root = (): JSX.Element => {
  return (
    <>
      <Navigator />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;