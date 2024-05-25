import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { memo } from 'react';

// import { HomepageMeta } from '../../data/dataDef';

const Page = memo(({ children, title, description }) => {
  const { asPath: pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link rel="canonical" href={`https://reactresume.com${pathname}`} key="canonical" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://reactresume.com${pathname}`} />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;