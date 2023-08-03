import React from 'react';
import { useTranslation } from 'next-i18next';

import BasicBreadcrumbs from '@/components/BreadCrumb';
import {
  InventoryCount,
  InventoryItem,
  ItemsByStatus,
  accountPayable,
  noOfSupplier,
  Total_Items,
  upcomingInventory,
  InventoryStatusData,
  Warehouse_Data1,
  Warehouse_Data_Color,
  Warehouse_Data2,
  Warehouse_Data3,
  Warehouse_Data4,
  Demand_Chart_Data,
  InventoryAgingDataColumn,
  InventoryAgingDataRow,
  StockoutsAndBackordersData,
  SupplierPerformanceChartData,
} from '@/constants/inventory';
import Barchart from '@/components/BarChart';
import PieChartData from '@/components/PieChart';
import { FlexColumn, FlexRow } from '@/components/styles';
import CustomTable from '@/components/Table';
import RadarChartComponent from '@/components/RadarChart';

import { CardsWrapper, ChartHead, CustomHeader, Header, MainWrapper } from '../HumanResource/style';
import HRCard from '../HumanResource/Cards';
import {
  ChartWrapper,
  GenericTitle,
  GraphHead,
  LineChartWrapper,
  PieChartWrapper,
  TableTitle,
  TableWrapper,
} from '../Dashboard/style';
import VerticlaBarChart from '../HumanResource/VerticlaBarChart';
import LineChartComponent from '../HumanResource/LineChart';

const Inventory: any = () => {
  const { t } = useTranslation('common');

  return (
    <MainWrapper>
      <Header>
        <BasicBreadcrumbs
          path='/inventory'
          firstLinkText={t('inventory.FirstLinkText')}
          secondText={t('inventory.breadcrumbFirstLinkText')}
        />
      </Header>
      <CustomHeader>{t('inventory.header')}</CustomHeader>
      <CardsWrapper>
        <HRCard data={InventoryCount} />
        <HRCard data={upcomingInventory} />
        <HRCard data={noOfSupplier} />
        <HRCard data={accountPayable} />
      </CardsWrapper>
      <ChartWrapper>
        <PieChartWrapper>
          <ChartHead>
            <GenericTitle>{t('inventory.pieChartTitle')}</GenericTitle>
          </ChartHead>
          <PieChartData data={Total_Items} colors={['#057311']} totalProduct />
        </PieChartWrapper>
        <LineChartWrapper>
          <GenericTitle>{t('inventory.valueByItem')}</GenericTitle>
          <div
            style={{
              height: '100%',
            }}
          >
            <VerticlaBarChart data={InventoryItem} Count />
          </div>
        </LineChartWrapper>
        <LineChartWrapper $width={'690px'} $height>
          <GenericTitle>{t('inventory.inventoryStatus')}</GenericTitle>
          <div
            style={{
              height: '100%',
            }}
          >
            <VerticlaBarChart data={InventoryStatusData} status />
          </div>
        </LineChartWrapper>
        <LineChartWrapper $width={'555px'} $height>
          <GenericTitle>{t('inventory.itemsByStatus')}</GenericTitle>
          <div
            style={{
              height: '100%',
            }}
          >
            <Barchart data={ItemsByStatus} itemStatus />
          </div>
        </LineChartWrapper>
        <PieChartWrapper $width={'1260px'}>
          <ChartHead>
            <GenericTitle>{t('inventory.warehouseUtilization')}</GenericTitle>
          </ChartHead>
          <FlexRow>
            <div>
              <FlexColumn $marginTop={'20px'}>
                <GraphHead>NKLP Warehouse</GraphHead>
                <GraphHead></GraphHead>
              </FlexColumn>
              <PieChartData
                data={Warehouse_Data1}
                colors={Warehouse_Data_Color}
                totalProduct
                totalCapacity={10000}
                tooltip
              />
            </div>
            <div>
              <FlexColumn $marginTop={'20px'}>
                <GraphHead>Multan Warehouse</GraphHead>
              </FlexColumn>
              <PieChartData
                data={Warehouse_Data2}
                colors={Warehouse_Data_Color}
                totalProduct
                totalCapacity={8000}
                tooltip
              />
            </div>
            <div>
              <FlexColumn $marginTop={'20px'}>
                <GraphHead>Gatti Warehouse</GraphHead>
              </FlexColumn>
              <PieChartData
                data={Warehouse_Data3}
                colors={Warehouse_Data_Color}
                totalProduct
                totalCapacity={12000}
                tooltip
              />
            </div>
            <div>
              <FlexColumn $marginTop={'20px'}>
                <GraphHead>Jamshoro Warehouse</GraphHead>
              </FlexColumn>
              <PieChartData
                data={Warehouse_Data4}
                colors={Warehouse_Data_Color}
                totalProduct
                totalCapacity={6000}
                tooltip
              />
            </div>
          </FlexRow>
        </PieChartWrapper>
        <LineChartWrapper $width={'1260px'} $height>
          <GenericTitle>{t('inventory.demandForecasting')}</GenericTitle>
          <div
            style={{
              height: '100%',
            }}
          >
            <LineChartComponent data={Demand_Chart_Data} df />
          </div>
        </LineChartWrapper>
        <LineChartWrapper $width={'1260px'}>
          <TableWrapper $width={'100%'}>
            <TableTitle>{t('inventory.inventoryAging')}</TableTitle>
            <CustomTable columns={InventoryAgingDataColumn} rows={InventoryAgingDataRow} hideaction rowWidth />
          </TableWrapper>
        </LineChartWrapper>

        <LineChartWrapper $width={'690px'} $height>
          <GenericTitle>{t('inventory.stockoutsAndBackorders')}</GenericTitle>
          <div
            style={{
              height: '100%',
            }}
          >
            <VerticlaBarChart data={StockoutsAndBackordersData} status stock />
          </div>
        </LineChartWrapper>
        <LineChartWrapper $width={'555px'} $height>
          <GenericTitle>{t('inventory.stockoutsAndBackorders')}</GenericTitle>
          <div
            style={{
              height: '100%',
            }}
          >
            <RadarChartComponent data={SupplierPerformanceChartData} />
          </div>
        </LineChartWrapper>
      </ChartWrapper>
    </MainWrapper>
  );
};

export default Inventory;
