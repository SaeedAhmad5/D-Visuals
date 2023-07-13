import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { BreadCrumbLink, BreadCrumbSecondLink, BreadCrumbText, Container } from './styles';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

interface BasicBreadcrumbsProps {
  firstLinkText: string;
  secondText: string;
  path: string;
  thirdText?: string | null;
}

function BasicBreadcrumbs({ firstLinkText, secondText, thirdText, path }: BasicBreadcrumbsProps) {
  return (
    <Container role='presentation' onClick={handleClick}>
      <Breadcrumbs aria-label='breadcrumb'>
        <BreadCrumbLink color='inherit' href='/dashboard'>
          {firstLinkText}
        </BreadCrumbLink>
        {thirdText ? (
          <Breadcrumbs aria-label='breadcrumb'>
            <BreadCrumbLink href={path}>{secondText}</BreadCrumbLink>
            <BreadCrumbText>{thirdText}</BreadCrumbText>
          </Breadcrumbs>
        ) : (
          <BreadCrumbSecondLink href={path}>{secondText}</BreadCrumbSecondLink>
        )}
      </Breadcrumbs>
    </Container>
  );
}

export default BasicBreadcrumbs;
