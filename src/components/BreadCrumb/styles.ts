import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div``;

export const BreadCrumbLink = styled(Link)`
  font-weight: 400;
  font-size: 0.95rem;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    text-decoration: underline;
  }
`;
export const BreadCrumbSecondLink = styled(Link)`
  font-weight: 400;
  font-size: 0.95rem;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.colors.lightGreen};
  &:hover {
    text-decoration: underline;
  }
`;
export const BreadCrumbText = styled.span`
  font-weight: 400;
  font-size: 0.9rem;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.colors.lightGreen};
`;
