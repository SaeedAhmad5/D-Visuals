import React from 'react';

import { CardHead } from '../Cards/style';

import { ScopeCardBody, ScopeCardWrapper } from './style';

type CardDataItem = {
  title: string;
  totalno: number;
  unit: string;
};

type CardProps = {
  data: CardDataItem[];
};

const ScopeCard = ({ data }: CardProps) => {
  return (
    <>
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
    </>
  );
};

export default ScopeCard;
