import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { FullScreenLoader } from '@/components/Layout';
import { useAppDispatch } from '@/redux';
import { logout } from '@/redux/slices/auth/thunks';

const Logout = () => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const handleLogout = async () => {
    await dispatch(logout());
    push('/');
  };

  useEffect(() => {
    handleLogout();
  });

  return <FullScreenLoader />;
};

export default Logout;
