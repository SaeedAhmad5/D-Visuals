import { useTranslation } from 'next-i18next';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ErrorEl = styled.p`
  font-size: 14px;
  padding: 0 4px;
  color: ${({ theme }) => theme.colors.error};
`;

const EZError = ({ children }: { children: ReactNode }) => {
  const [t] = useTranslation('common');

  return <ErrorEl>{t(`errors.${children}`)}</ErrorEl>;
};

export default EZError;
