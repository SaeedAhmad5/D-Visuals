import React from 'react';

import { MarginTop } from '@/components/styles';

import { CardContainer, CardHead, CardIcon, ScopeCardBody, ScopeCardWrapper } from './styles';

type CardDataItem = {
  title: string;
  totalno: number;
  unit: string;
  capacity?: string;
  capacityCount?: number;
  capacityUnit?: string;
  totalCapcity?: string;
  thermalCapacity?: string;
  thermal?: string;
  hydroCapacity?: string;
  Hydro?: string;
  Solar?: string;
  solarCapacity?: string;
};

type CardProps = {
  data: CardDataItem[];
  icon?: any;
  projectSystem?: boolean;
  underConstruction?: boolean;
  attrition?: any;
  totalEmployee?: any;
  activeEmployee?: any;
  averageAge?: any;
};

const HRCard = ({
  data,
  icon,
  projectSystem,
  underConstruction,
  attrition,
  totalEmployee,
  activeEmployee,
  averageAge,
}: CardProps) => {
  return (
    <CardContainer>
      <ScopeCardWrapper>
        {data.map((item: CardDataItem) => (
          <>
            {!projectSystem ? (
              <>
                {!underConstruction ? (
                  <>
                    <CardHead>
                      <p>{item.title}</p>
                    </CardHead>
                    <ScopeCardBody>
                      <h5>
                        {averageAge
                          ? averageAge
                          : activeEmployee
                          ? activeEmployee
                          : totalEmployee
                          ? totalEmployee
                          : attrition
                          ? attrition
                          : item.totalno}{' '}
                        <span>{item.unit}</span>
                      </h5>
                    </ScopeCardBody>
                  </>
                ) : (
                  <>
                    <CardHead>
                      <p>{item.title}</p>
                    </CardHead>
                    <MarginTop rem='1.5' />
                    <ScopeCardBody $fontSize>
                      <h5>
                        Total : {item.totalno} <span>{item.totalCapcity}</span>
                      </h5>
                      <h5>
                        Thermal : {item.thermal} <span>{item.thermalCapacity}</span>
                      </h5>
                      <h5>
                        Hydro : {item.Hydro} <span>{item.hydroCapacity}</span>
                      </h5>
                      <h5>
                        Solar : {item.Solar} <span>{item.solarCapacity}</span>
                      </h5>
                    </ScopeCardBody>
                  </>
                )}
              </>
            ) : (
              <>
                <CardHead>
                  <p>{item.title}</p>
                </CardHead>
                <MarginTop rem='0.8' />
                <ScopeCardBody>
                  <h5>
                    {item.totalno} <span>{item.unit}</span>
                  </h5>
                </ScopeCardBody>
                <MarginTop rem='1.2' />
                <CardHead>
                  <p>{item.capacity}</p>
                </CardHead>
                <MarginTop rem='0.8' />
                <ScopeCardBody>
                  <h5>
                    {item.capacityCount} <span>{item.capacityUnit}</span>
                  </h5>
                </ScopeCardBody>
              </>
            )}
          </>
        ))}
      </ScopeCardWrapper>
      <CardIcon>{icon}</CardIcon>
    </CardContainer>
  );
};

export default HRCard;
