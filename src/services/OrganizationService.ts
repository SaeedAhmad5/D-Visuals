import axios from 'axios';

import { BASE_API_URL } from '@/constants/api';

const BASE_ORGANIZATION_URL = `${BASE_API_URL}/api/v1/organizations`;

class OrganizationService {
  static async signUpOrganization(data: any) {
    const formdata = new FormData();

    Object.keys(data).map(key => formdata.append(key, data[key]));

    const resp = await axios.post(`${BASE_ORGANIZATION_URL}/public/signup`, formdata, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    return resp.data;
  }
}

export default OrganizationService;
