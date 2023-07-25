import React from 'react';
import { useTranslation } from 'next-i18next';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import PeopleIcon from '@mui/icons-material/People';
import TodayIcon from '@mui/icons-material/Today';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';

import BasicBreadcrumbs from '@/components/BreadCrumb';
import PieChartData from '@/components/PieChart';
import Barchart from '@/components/BarChart';
import Table from '@/components/Table';
import {
  COLORS,
  CpChartData,
  OleBarChartData,
  OleChartData,
  TqChartData,
  activeEmployees,
  agedata,
  attritionEmployees,
  avgAge,
  barChartData,
  departmentChartData,
  departmentColor,
  educationWiseAttritionData,
  pieChartData,
  totalEmployees,
} from '@/constants/humanResource';
import { JobSatisficationDataColumn, JobSatisficationDataRow } from '@/constants/events';

import {
  ChartWrapper,
  GenericTitle,
  LineChartWrapper,
  PieChartWrapper,
  TableTitle,
  TableWrapper,
} from '../Dashboard/style';

import { MainWrapper, CustomHeader, Header, CardsWrapper, ChartHead, OleCap } from './style';
import HRCard from './Cards';
import BarCharDataBox from './BarChartDataBox';
import VerticlaBarChart from './VerticlaBarChart';
import LineChartComponent from './LineChart';

export interface ColumnDataInterface {
  id: string;
  label: string;
  numeric?: boolean;
  isStatus?: boolean;
}

const HumanResource = () => {
  const { t } = useTranslation('common');

  return (
    <MainWrapper>
      <Header>
        <BasicBreadcrumbs
          path='/human_resource'
          firstLinkText={t('hr.breadcrumbFirstLinkText')}
          secondText={t('hr.breadcrumbSecondText')}
        />
      </Header>
      <CustomHeader>{t('hr.header')}</CustomHeader>
      <CardsWrapper>
        <HRCard data={totalEmployees} icon={<PeopleIcon />} />
        <HRCard data={activeEmployees} icon={<EmojiPeopleIcon />} />
        <HRCard data={attritionEmployees} icon={<PersonOffIcon />} />
        <HRCard data={avgAge} icon={<TodayIcon />} />
      </CardsWrapper>
      <ChartWrapper>
        <PieChartWrapper>
          <ChartHead>
            <GenericTitle>{t('hr.pieChartTitle')}</GenericTitle>
            <ManIcon style={{ color: '#80CC28', fontSize: '30px' }} />
            <WomanIcon style={{ color: '#DD7596', position: 'absolute', fontSize: '30px', left: '110px' }} />
          </ChartHead>
          <PieChartData data={pieChartData} colors={COLORS} />
        </PieChartWrapper>
        <LineChartWrapper>
          <GenericTitle>{t('hr.barChartTitle')}</GenericTitle>
          <BarCharDataBox />
          <div
            style={{
              width: '85%',
              height: '100%',
            }}
          >
            <Barchart data={barChartData} />
          </div>
        </LineChartWrapper>
        <LineChartWrapper>
          <GenericTitle>{t('hr.ageBarChartTitle')}</GenericTitle>
          <div
            style={{
              height: '100%',
              marginTop: '60px',
            }}
          >
            <VerticlaBarChart data={agedata} />
          </div>
        </LineChartWrapper>
        <PieChartWrapper>
          <ChartHead>
            <GenericTitle>{t('hr.departmentWiseAttrition')}</GenericTitle>
          </ChartHead>
          <PieChartData data={departmentChartData} colors={departmentColor} hideInnerRadius />
        </PieChartWrapper>
        <TableWrapper>
          <TableTitle>{t('hr.jobSatisficationRatingTitle')}</TableTitle>
          <Table columns={JobSatisficationDataColumn} rows={JobSatisficationDataRow} hideaction difference />
        </TableWrapper>
        <LineChartWrapper $width={'555px'} $height>
          <GenericTitle>{t('hr.educationWiseAttrition')}</GenericTitle>
          <div
            style={{
              height: '100%',
            }}
          >
            <Barchart data={educationWiseAttritionData} color={'#bfbebe'} />
          </div>
        </LineChartWrapper>

        <LineChartWrapper $width={'555px'} $height>
          <GenericTitle>{t('hr.laborEffectiveness')}</GenericTitle>
          <OleCap> {t('hr.oleCap')}</OleCap>
          <div
            style={{
              height: '100%',
            }}
          >
            <LineChartComponent data={OleChartData} />
          </div>
        </LineChartWrapper>
        <LineChartWrapper $width={'690px'} $height>
          <GenericTitle>{t('hr.departmentLaborEffectiveness')}</GenericTitle>
          <div
            style={{
              height: '100%',
              marginTop: '60px',
            }}
          >
            <VerticlaBarChart data={OleBarChartData} Ole />
          </div>
        </LineChartWrapper>
        <LineChartWrapper $width={'690px'} $height>
          <GenericTitle>{t('hr.contractPermanent')}</GenericTitle>
          <OleCap></OleCap>

          <div
            style={{
              height: '100%',
            }}
          >
            <LineChartComponent data={CpChartData} Cp />
          </div>
        </LineChartWrapper>
        <LineChartWrapper $width={'555px'} $height>
          <GenericTitle>{t('hr.timeQuit')}</GenericTitle>
          <OleCap> {t('hr.timeQuitCap')}</OleCap>
          <div
            style={{
              height: '100%',
            }}
          >
            <LineChartComponent data={TqChartData} Tq />
          </div>
        </LineChartWrapper>
      </ChartWrapper>
    </MainWrapper>
  );
};

export default HumanResource;
