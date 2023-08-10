import React, { useEffect, useMemo } from 'react';
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
import { useAppDispatch, useAppSelector } from '@/redux';
import {
  selectAgeBandData,
  selectAllHrData,
  selectFilteredGenderData,
  selectFilteredHrData,
  selectFilteredRetiredEmployeeData,
} from '@/redux/slices/humanResource/selectors';
import { fetchAllHrDataThunk } from '@/redux/slices/humanResource/thunk';

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

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllHrDataThunk());
  }, []);

  const hrData = useAppSelector(selectAllHrData);
  const filteredHrAttritionCount = useAppSelector(selectFilteredHrData('Yes'));
  const HrActiveEmployeeCount = useAppSelector(selectFilteredHrData('No'));
  const filteredMaleGenderData = useAppSelector(selectFilteredGenderData('Male'));
  const filteredFemaleGenderData = useAppSelector(selectFilteredGenderData('Female'));
  const filteredRetiredEmployeeData = useAppSelector(selectFilteredRetiredEmployeeData('0'));
  const ageBandData = useAppSelector(selectAgeBandData);

  // Calculate average age using useMemo
  const averageAge = useMemo(() => {
    const totalEmployees = hrData.length;
    const ageSum = hrData.reduce((sum, item) => sum + item.Age, 0);

    return totalEmployees > 0 ? ageSum / totalEmployees : 0;
  }, [hrData]);
  // eslint-disable-next-line
  console.log(ageBandData);
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
        <HRCard data={totalEmployees} icon={<PeopleIcon />} totalEmployee={hrData.length} />
        <HRCard data={activeEmployees} icon={<EmojiPeopleIcon />} activeEmployee={HrActiveEmployeeCount.length} />
        <HRCard data={attritionEmployees} icon={<PersonOffIcon />} attrition={filteredHrAttritionCount.length} />
        <HRCard data={avgAge} icon={<TodayIcon />} averageAge={averageAge.toFixed()} />
      </CardsWrapper>
      <ChartWrapper>
        <PieChartWrapper>
          <ChartHead>
            <GenericTitle>{t('hr.pieChartTitle')}</GenericTitle>
            <ManIcon style={{ color: '#80CC28', fontSize: '30px' }} />
            <WomanIcon style={{ color: '#DD7596', position: 'absolute', fontSize: '30px', left: '110px' }} />
          </ChartHead>
          <PieChartData
            data={pieChartData}
            filteredMaleGenderData={filteredMaleGenderData.length}
            filteredFemaleGenderData={filteredFemaleGenderData.length}
            colors={COLORS}
            gender
          />
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
            <Barchart
              data={barChartData}
              TotalEmployees={hrData.length}
              activeEmployee={HrActiveEmployeeCount.length}
              retiredEmployee={filteredRetiredEmployeeData.length}
            />
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
