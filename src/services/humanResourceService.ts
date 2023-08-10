import axios from 'axios';

import { BASE_API_URL } from '@/constants/api';

const BASE_HUMAN_RESOURCE_URL = `${BASE_API_URL}/human_resource`;

class HumanResourceService {
  static async fetchAllHrData() {
    const resp = await axios.get(`${BASE_HUMAN_RESOURCE_URL}`);
    return resp.data;
  }
}

export default HumanResourceService;
