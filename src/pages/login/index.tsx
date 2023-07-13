import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Login from '@/views/Login';

export const getServerSideProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
      noNav: true,
      noSidebar: true,
    },
  };
};

export default function LoginPage() {
  return <Login />;
}
