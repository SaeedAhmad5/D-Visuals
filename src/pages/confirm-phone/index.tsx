import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import ConfirmOTP from '@/views/ConfirmOTP';

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
      noNav: true,
      noSidebar: true,
    },
  };
};

export default function ConfirmOTPPage() {
  return <ConfirmOTP />;
}
