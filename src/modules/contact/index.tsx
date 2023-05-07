import React from 'react';

import Page from '../../_common/components/page';
import Header from '../../_common/header';
import Content from './content';
// headerProps={{ title:'Services', description:'CookieBuilds offers different types of services, from custom websites, to full on web applications, and even android applications, If that is what you are looking for' }} 

const headerProps = {
  title: 'Contact',
  description: 'Like what you’ve seen so far? Great! I’d love to hear from you. Whether you have a project in mind, a question about my services, or anything else, feel free to reach out using the contact form below and I’ll get back to you asap.',
};

const Contact = (): JSX.Element => {
  return (
    <Page title='Contact'>
      <Header headerProps={headerProps}/>
      <Content />
    </Page>
  );
};

export default Contact;
