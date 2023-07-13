import styled from 'styled-components';

export const FormContainer = styled.form`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const LoginButtonWrapper = styled.div`
  & > button {
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`;
