import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';

import { USER_STATE_INIT } from '@/constants/auth';
import { FlexRowContentContainer } from '@/components/styles';

import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import AppSnackbar from '../AppSnackbar';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const ScrollView = styled.div`
  position: relative;
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    z-index: 10000 !important;
  }
`;

export const Main = styled.main`
  overflow: hidden;
  position: relative;
  z-index: 1;
  overflow: hidden;
  min-height: 100%;
`;

export const ScrollContainer = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const FullScreenLoader = () => (
  <FlexRowContentContainer>
    <CircularProgress size={60} color='inherit' />
  </FlexRowContentContainer>
);

const Layout = ({ children, pageProps }: { children: ReactNode; pageProps: any }) => {
  const { push } = useRouter();
  const currentUser = USER_STATE_INIT;
  const [isLoading, setIsLoading] = useState(true);


  if (pageProps.redirect) {
    push(pageProps.path);
    return <></>;
  }

  useEffect(() => {
    if (currentUser === USER_STATE_INIT) {
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    } else {
      setIsLoading(false);
    }
  }, [currentUser]);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <AppContainer>
      {!pageProps.noSidebar && <Sidebar />}
      {!pageProps.noNav && <Navbar />}
      {children?.props?.noNav === true ? (
        <Main>{children}</Main>
      ) : (
        <>
          <ScrollContainer>
            <ScrollView>
              <Main>{children}</Main>
            </ScrollView>
          </ScrollContainer>
        </>
      )}
      <AppSnackbar />
    </AppContainer>
  );
};

export default Layout;
