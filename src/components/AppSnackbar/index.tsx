import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';
import { Alert, AlertTitle, Slide, Snackbar } from '@mui/material';
import styled from 'styled-components';

import { selectSnack } from '@/redux/slices/snack/selectors';
import { useSnack } from '@/hooks/snack';
import { theme } from '@/styles/theme';

const typeToBackground = {
  success: {
    hex: theme.colors.goblin,
    rgba: 'rgba(23, 122, 27, 0.4)',
  },
  error: {
    hex: theme.colors.error,
    rgba: 'rgba(138, 31, 29, 0.4)',
  },
  warning: {
    hex: '#9e6e2b',
    rgba: 'rgba(158, 110, 43, 0.4)',
  },
  info: {
    hex: '#21769c',
    rgba: 'rgba(33, 118, 156, 0.4)',
  },
};

type Type = 'success' | 'error' | 'warning' | 'info';

const StyledSnackbar = styled(Snackbar)<{ $type: Type }>`
  min-width: 400px;

  & > .MuiAlert-filled {
    backdrop-filter: blur(10px);
    min-width: 80%;
    border: ${({ $type }: { $type: Type }) => `3px solid ${typeToBackground[$type]?.hex}`};
    color: ${({ $type }: { $type: Type }) => `${typeToBackground[$type]?.hex}`};
    background-color: white;
    border-radius: 12px;
  }

  & .MuiAlertTitle-root {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0;
  }

  & .MuiAlert-message {
    font-weight: bold;
    font-size: 14px;
  }
`;

const AppSnackbar = () => {
  const [t] = useTranslation('common');
  const snackState = useSelector(selectSnack);
  const { hideSnack } = useSnack();

  return snackState.open ? (
    <StyledSnackbar
      data-testid='alert-snack'
      open={snackState.open}
      $type={snackState.type}
      onClose={() => hideSnack()}
      autoHideDuration={snackState.duration}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      TransitionComponent={Slide}
    >
      <Alert icon={false} variant='filled' severity={snackState.type} onClose={hideSnack}>
        <AlertTitle>{snackState.type?.toUpperCase()}!</AlertTitle>
        {snackState.type === 'error'
          ? t([`errors.${snackState.message}`, `${snackState.message}`, 'errors.generalError'])
          : t(snackState.message)}
      </Alert>
    </StyledSnackbar>
  ) : (
    <></>
  );
};

export default AppSnackbar;
