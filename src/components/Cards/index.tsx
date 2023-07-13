import React from 'react';
import Image from 'next/image';

import { CardWrapper, CardHead, LogoBox, CardBody, CardsContainer } from './style';

type CardDataItem = {
  totalno: number | string;
  unit?: string;
  label: string;
};

type CardProps = {
  title: string;
  icon: string;
  data: CardDataItem[];
};
const Cards = ({ title, icon, data }: CardProps) => {
  const isDataLarge = data.length >= 3;

  return (
    <>
      <CardWrapper>
        <CardHead>
          <p>{title}</p>
          <LogoBox>
            <Image alt={`${title} icon`} src={icon} objectFit='contain' layout='fill' />
          </LogoBox>
        </CardHead>
        <CardsContainer $large={isDataLarge}>
          {data.map((item: CardDataItem, index: number) => (
            <CardBody key={index}>
              <h5>
                {item.totalno} <span>{item.unit}</span>
              </h5>
              <p>{item.label}</p>
            </CardBody>
          ))}
        </CardsContainer>
      </CardWrapper>
    </>
  );
};

export default Cards;
