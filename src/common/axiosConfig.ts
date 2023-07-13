import Router from 'next/router';
import axios from 'axios';

/* eslint-disable */
const configureAxios: any = (store: any) => {
  const errorCallback = (error: any) => {
    if (!error) {
      return Promise.reject('network_error');
    }

    if (error.response?.status === 401 || error.status === 401) {
      // remove token from sessionStorage, remove interceptors and retry
      Router.push('/logout');
      delete error.config.headers.authorization;
      return Promise.reject(error);
    } else {
      if (error.response?.data) {
        return Promise.reject(error.response.data.error || error.response.data);
      } else if (error.data) {
        return Promise.reject(error.data);
      } else {
        return Promise.reject(error);
      }
    }
  };
  axios.interceptors.response.use(null, errorCallback);
};

export default configureAxios;
