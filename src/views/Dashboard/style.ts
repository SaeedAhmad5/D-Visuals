import styled from 'styled-components';

export const FormolaBoxStyles = styled.div`
  min-width: 550px;
  width: 100%;
  height: 6rem;
  background: rgba(197, 156, 160, 0.2);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  h5 {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.12px;
    text-align: left;
    color: ${({ theme }) => theme.colors.black};
  }

  & > li {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.25px;
    color: ${({ theme }) => theme.colors.black};
    margin-left: 1rem;
  }
`;
export const ChartWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 465px;
`;

export const PieChartWrapper = styled.div`
  box-sizing: border-box;
  padding: 19px 26px;
  width: 35%;
  min-height: 405px;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px dashed ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
`;

export const GenericTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.black};
`;

export const LineChartWrapper = styled(PieChartWrapper)`
  min-height: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  gap: 1.2rem;
  width: 60%;
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: max-content;
  background: ${({ theme }) => theme.colors.white};
`;
export const TableTitle = styled(GenericTitle)`
  margin: 1rem 0 1rem 1rem;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CustomButton = styled.div`
  width: 182px;
  height: 44px;
`;
