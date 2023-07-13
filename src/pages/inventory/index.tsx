import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { HeaderOffset } from '@/components/styles';
import Inventory from '@/views/Inventory';

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
        <title>Inventory</title>
      </Head>
      <HeaderOffset />
      <Inventory />
    </>
  );
}
