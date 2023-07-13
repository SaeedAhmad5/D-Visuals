import React from 'react';

import ScopeCard from '@/components/ScopeCard';
const Scope = () => {
  const scope: any = [
    {
      title: 'Scope 1',
      totalno: 22,
      unit: 'tCO2e',
    },
  ];
  return (
    <>
      <ScopeCard data={scope} />
      <ScopeCard data={scope} />
      <ScopeCard data={scope} />
    </>
  );
};

export default Scope;
