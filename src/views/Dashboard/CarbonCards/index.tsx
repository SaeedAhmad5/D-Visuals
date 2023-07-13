import React from 'react';
import { useTranslation } from 'next-i18next';

import Cards from '@/components/Cards';

const CarbonCards = () => {
  const { t } = useTranslation('common');

  const CarbonFootprint: string | any = [
    {
      totalno: 419.99,
      unit: 'tCO2e',
      label: `${t('carbonFootprint.totalcarbonlabel')}`,
    },
    {
      totalno: 3,
      unit: 'kgCO2e',
      label: `${t('carbonFootprint.averageCarbonlabel')}`,
    },
  ];
  const WasteFootprint: string | any = [
    {
      totalno: 8,
      unit: 'tones',
      label: `${t('wasteFootprint.totalwastelabel')}`,
    },
    {
      totalno: 3,
      unit: 'kg',
      label: `${t('wasteFootprint.averagewastelabel')}`,
    },
  ];
  const TotalEvents: string | any = [
    {
      totalno: 8,
      label: `${t('totalevents.inperson')}`,
    },
    {
      totalno: 8,
      label: `${t('totalevents.virtual')}`,
    },
    {
      totalno: 8,
      label: `${t('totalevents.hybrid')}`,
    },
  ];
  const TotalAttendees: string | any = [
    {
      totalno: '6,252',
      label: `${t('totalevents.inperson')}`,
    },
    {
      totalno: '2,500',
      label: `${t('totalevents.virtual')}`,
    },
    {
      totalno: '31,002',
      label: `${t('totalevents.hybrid')}`,
    },
  ];
  return (
    <>
      <Cards title={`${t('carbonFootprint.title')}`} icon='/dashboard/carbon.svg' data={CarbonFootprint} />
      <Cards title={`${t('wasteFootprint.title')}`} icon='/dashboard/waste.svg' data={WasteFootprint} />
      <Cards title={`${t('totalevents.title')}`} icon='/dashboard/calendar.svg' data={TotalEvents} />
      <Cards title={`${t('totalAttendees.title')}`} icon='/dashboard/people.svg' data={TotalAttendees} />
    </>
  );
};

export default CarbonCards;
