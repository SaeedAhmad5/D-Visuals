import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import ResetPassword from '@/views/ResetPassword';
import { authorizeUser } from '@/utils/authorize';

export const getServerSideProps = async ({ req, locale }: any) => {
  const authed = await authorizeUser({ req });
  if (authed) {
    return {
      props: {
        redirect: true,
        path: '/dashboard',
        noNav: true,
        noSidebar: true,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
      noNav: true,
      noSidebar: true,
    },
  };
};

export default function ResetPasswordPage() {
  return <ResetPassword />;
}
