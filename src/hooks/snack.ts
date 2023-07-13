import { useEffect } from 'react';
import { Selector } from '@reduxjs/toolkit';

import { useAppDispatch, useAppSelector } from '@/redux';

import { showSnack as showSnackAction, closeSnack as closeSnackAction } from '../redux/slices/snack/slice';

const getTitle = (type: string) => {
  switch (type) {
  case 'success':
    return 'success';

  case 'error':
    return 'somethingWentWrong';

  case 'warning':
    return 'warning';

  case 'info':
    return 'didYouKnow';
  }
};

export const useSnack = (errorSelector?: Selector, resetErrorAction?: any) => {
  const dispatch = useAppDispatch();
  const error: any = errorSelector ? useAppSelector(errorSelector) : null;

  const showSnack = ({
    type,
    message,
    duration,
    title,
    action,
    resetErrorAction,
  }: {
    type: string;
    message: string;
    duration?: number;
    title?: string;
    action?: Function;
    resetErrorAction?: Function;
  }) => {
    const titleForAction = title ? title : getTitle(type);

    dispatch(showSnackAction({ type, message, titleForAction, action, duration: duration || 5000 }));
    if (resetErrorAction) {
      dispatch(resetErrorAction());
    }
  };

  useEffect(() => {
    if (error) {
      showSnack({
        type: 'error',
        message: error.message ? error.message : error ? error : 'An Unexpected Error Occured',
        duration: 5000,
        resetErrorAction,
      });
    }
  }, [error, resetErrorAction, showSnack]);

  const hideSnack = () => {
    dispatch(closeSnackAction({}));
  };

  return {
    showSnack,
    hideSnack,
  };
};
