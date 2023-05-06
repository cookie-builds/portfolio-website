import React from 'react';

import Page from '../../_common/components/page';
import Header from '../../_common/header';
import Content from './content';
// headerProps={{ title:'Services', description:'CookieBuilds offers different types of services, from custom websites, to full on web applications, and even android applications, If that is what you are looking for' }} 

const Home = (): JSX.Element => {
  return (
    <Page>
      <Header/>
      <Content />
    </Page>
  );
};

export default Home;
