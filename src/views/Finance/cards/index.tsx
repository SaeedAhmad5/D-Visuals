import React from 'react';

import { CardContainer, CardHead, CardIcon, ScopeCardBody, ScopeCardWrapper } from './styles';

type CardDataItem = {
  title: string;
  totalno: string;
  unit: string;
};

type CardProps = {
  data: CardDataItem[];
  icon?: any;
};

const FinanceCard = ({ data, icon }: CardProps) => {
  return (
    <CardContainer>
      <ScopeCardWrapper>
        {data.map((item: CardDataItem) => (
          <>
            <CardHead>
              <p>{item.title}</p>
            </CardHead>
            <ScopeCardBody>
              <h5>
                {item.totalno} <span>{item.unit}</span>
              </h5>
            </ScopeCardBody>
          </>
        ))}
      </ScopeCardWrapper>
      <CardIcon>
        {icon}
      </CardIcon>
    </CardContainer>
  );
};

export default FinanceCard;