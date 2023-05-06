import React from 'react';

import Page from '../../_common/components/page';
import Header from '../../_common/header';
import Content from './content';

const headerProps = {
  title: 'Projects', 
  description: 'Here, you can view all of my previous projects, although there might not be many listed yet as I`m just getting started in my career. But don`t worry - I`ll be updating this page regularly with new projects as I complete them. In the meantime, feel free to take a look at what I`ve done so far and get in touch if you`re interested in working with me on a new project.',
};

const About = (): JSX.Element => {
  return (
    <Page title='Projects'>
      <Header headerProps={headerProps} />
      <Content />
    </Page>
  );
};

export default About;
