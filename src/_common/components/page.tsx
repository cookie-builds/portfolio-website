import React from 'react';
import Helmet from 'react-helmet';

export type SeoInformation = {
  title?: string,
  description?: string,
  keywords?: string,
};

const standardSeo: SeoInformation = {
  title: 'CookieBuilds',
  description: 'Welcome to the CookieBuilds website! If you are looking for a capable developer to make your very own website or web application, do not hesitate to get in contact with me!',
  keywords: 'webdeveloper, Belgium, webdesign, website, web application, react, kotlin, Aalst, Oostende, kmo',
};

const page = ({ title, seoInformation, children }: {title?: string, seoInformation?: SeoInformation, children?: React.ReactNode}) => {
  return (
    <div>
      <Helmet>
        <title>{`${title} | ${standardSeo.title}`}</title>
        <meta charSet='utf-8' />
        <meta name='title' content={seoInformation && seoInformation.title ? `${title} | ${standardSeo.title}` : standardSeo.title} />
        <meta name='description' content={seoInformation?.description ? seoInformation.description : standardSeo.description} />
        <meta name='keywords' content={seoInformation?.keywords ? seoInformation.keywords : standardSeo.keywords} />
      </Helmet>
      {children}
    </div>
  );
};

export default page;