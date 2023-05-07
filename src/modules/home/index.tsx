import React from 'react';

import Page from '../../_common/components/page';
import Header from '../../_common/header';
import Content from './content';

const Home = (): JSX.Element => {
  return (
    <Page>
      <Header/>
      <Content />
    </Page>
  );
};

export default Home;
