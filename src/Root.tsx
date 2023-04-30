import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigator from './_common/navigator';

const Root = (): JSX.Element => {
  return (
    <>
      <Navigator />
      <Outlet />
    </>
  );
};

export default Root;