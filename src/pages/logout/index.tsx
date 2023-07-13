import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Logout from '@/views/Logout';

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
      noNav: true,
      noSidebar: true,
    },
  };
};

export default function ConfirmEmailPage() {
  return <Logout />;
}
