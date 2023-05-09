import axios from 'axios';
import {
  CreateStoreParams,
  CreateStoreResponse,
  GetStoreParams,
  GetStoreResponse,
  GetStoresParams,
  GetStoresResponse,
  UpdateStoreParams,
  UpdateStoreResponse,
} from './types/Store';

/**
 * 하위상점 다건 조회
 */
export const getStores = async (
  access_token: string,
  params: GetStoresParams,
) => {
  const {...queries} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/stores`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    params: {...queries},
  });
  return response.data as GetStoresResponse;
};

/**
 * 하위상점 생성
 */
export const createStore = async (
  access_token: string,
  params: CreateStoreParams,
) => {
  const {...data} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/stores`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    data,
  });
  return response.data as CreateStoreResponse;
};

/**
 * 하위상점 단건 조회
 */
export const getStore = async (
  access_token: string,
  params: GetStoreParams,
) => {
  const {store_id, ...queries} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/stores/${store_id}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    params: {...queries},
  });
  return response.data as GetStoreResponse;
};

/**
 * 하위상점 수정
 */
export const updateStore = async (
  access_token: string,
  params: UpdateStoreParams,
) => {
  const {store_id, ...data} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/stores/${store_id}`,
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    data,
  });
  return response.data as UpdateStoreResponse;
};
