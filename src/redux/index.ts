import { configureStore, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWrapper } from 'next-redux-wrapper';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import appReducer, { RootState } from './rootReducer';

const isProd = process.env.NODE_ENV === 'production';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
  blacklist: [],
};

export const createStore = (initialState?: RootState) => {
  return configureStore({
    reducer: persistReducer(persistConfig, appReducer),
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

let store;
const makeStore = () => {
  store = createStore();
  return store;
};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: !isProd });
export { store };

export type AppRootState = ReturnType<typeof appReducer>;
export type AppThunkDispatch = ThunkDispatch<AppRootState, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
