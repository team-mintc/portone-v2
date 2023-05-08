import axios from 'axios';
import {
  GetBillingKeysParams,
  GetBillingKeysResponse,
  IssueBillingKeyParams,
  IssueBillingKeyResponse,
} from 'types/BillingKey';

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

/**
 * 빌링키 발급
 */
export const issueBillingKey = async (
  access_token: string,
  params: IssueBillingKeyParams,
) => {
  const {...data} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/billing-keys`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    data,
  });
  return response.data as IssueBillingKeyResponse;
};

/**
 * 빌링키 단건 조회
 */
export const getBillingKey = async (
  access_token: string,
  params: GetBillingKeysParams,
) => {
  const {billing_key, ...queries} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/billing-keys/${billing_key}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    params: {...queries},
  });
  return response.data as GetBillingKeysResponse;
};
