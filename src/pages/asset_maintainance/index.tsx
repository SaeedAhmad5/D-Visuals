import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { HeaderOffset } from '@/components/styles';
import AssetMaintainence from '@/views/AssetMaintainance';

export const getServerSideProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Asset Maintainance</title>
      </Head>
      <HeaderOffset />
      <AssetMaintainence />
    </>
  );
}
