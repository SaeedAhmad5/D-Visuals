import {
  AnyAction,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit';

import { apiReducerBuilder } from '@/utils/apiReducerBuilder';

import { fetchAllHrDataThunk } from './thunk';

export interface HrState extends EntityState<any> {
  // Update EntityState type
  error: string | null;
  isLoading: boolean;
}

export const HrAdapter = createEntityAdapter<any>({ selectId: entity => entity.emp_no });

const initialState = HrAdapter.getInitialState({
  isLoading: false,
  error: null,
});

const reducers: ValidateSliceCaseReducers<HrState, SliceCaseReducers<HrState>> = {
  resetHrError: state => {
    state.error = null;
  },
  applyAttritionFilter: (state, action: PayloadAction<string>) => {
    const attritionFilter = action.payload;
    const filteredData = state.entities.filter((item: { Attrition: string }) => item.Attrition === attritionFilter);
    HrAdapter.setAll(state, filteredData);
  },
  applyGenderFilter: (state, action: PayloadAction<string>) => {
    const genderFilter = action.payload;
    const filteredData = state.entities.filter((item: { Gender: string }) => item.Gender === genderFilter);
    HrAdapter.setAll(state, filteredData);
  },
  applyRetiredEmployeeFilter: (state, action: PayloadAction<string>) => {
    const RetiredEmployee = action.payload;
    const filteredData = state.entities.filter(
      (item: { RetiredEmployee: string }) => item.RetiredEmployee === RetiredEmployee
    );
    HrAdapter.setAll(state, filteredData);
  },
};

const slice = createSlice({
  name: 'human_resource',
  initialState,
  reducers,
  extraReducers: builder => {
    apiReducerBuilder(builder, fetchAllHrDataThunk, (state: HrState, action: AnyAction) => {
      HrAdapter.upsertMany(state, action.payload);
    });
  },
});

export const { resetHrError } = slice.actions; // Update action name

export default slice.reducer;
