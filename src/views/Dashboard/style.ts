import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 4rem;
`;
export const ScopeCardsWrapper = styled(CardsWrapper)`
  width: 100%;
`;

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
  flex-wrap: wrap;
`;

export const PieChartWrapper = styled.div<{ $width?: string; $height?: boolean }>`
  box-sizing: border-box;
  padding: 19px 26px;
  width: ${props => props.$width || '330px'};
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

export const LineChartWrapper = styled(PieChartWrapper)<{ $width?: string; $height?: boolean }>`
  min-height: 465px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  gap: 1.2rem;
  width: ${props => props.$width || '905px'};
  min-height: ${props => (props.$height ? '400px' : '465px')};
`;

export const TableWrapper = styled.div<{ $width?: string; $height?: boolean }>`
  width: ${props => props.$width || '52%'};
  padding: 20px;
  height: 400px;
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
export const GraphHead = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.black};
`;
