import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
      noNav: true,
      noSidebar: true,
    },
  };
};

export default function Home() {
  return (
    <>
      <Head>
        <title>NTDC</title>
      </Head>
      <h1>Landing</h1>
    </>
  );
}
