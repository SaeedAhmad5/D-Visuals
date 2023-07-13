import styled from 'styled-components';

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-align: center;
  gap: 0.7rem;

  & > h2 {
    font-size: 20px;
  }
`;

export const VerifyImage = styled.div`
  height: 77px;
  width: 82px;
  position: relative;
  margin: auto;
`;

export const OuterWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  width: 100%;
`;
