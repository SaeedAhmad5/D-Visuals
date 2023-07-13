import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import { HeaderOffset } from '@/components/styles';
import Finance from '@/views/Finance';

export const getServerSideProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Finance</title>
      </Head>
      <HeaderOffset />
      <Finance />
    </>
  );
}
