import React from 'react';

import Page from '../../_common/components/page';
import Header from '../../_common/header';
import Content from './content';

const headerProps = {
  title: 'Services', 
  description: 'At CookieBuilds, we offer a range of digital services to help your business succeed online. I specialize in creating custom websites, web applications and mobile applications tailored to your unique needs and goals. With our strategic approach, we`ll help you elevate your online presence and achieve your business objectives.',
};

const About = (): JSX.Element => {
  return (
    <Page title='Services'>
      <Header headerProps={headerProps} />
      <Content />
    </Page>
  );
};

export default About;
