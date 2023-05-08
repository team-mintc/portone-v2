import axios from 'axios';
import {GetBillingKeysParams, GetBillingKeysResponse} from 'types/BillingKey';

/**
 * 빌링키 다건 조회
 */
export const getBillingKeys = async (
  access_token: string,
  params: GetBillingKeysParams,
) => {
  const {...queries} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/billing-keys`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    params: {...queries},
  });
  return response.data as GetBillingKeysResponse;
};
