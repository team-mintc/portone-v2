import axios from 'axios';
import {
  GetStoreApplicationParams,
  GetStoreApplicationResponse,
} from 'types/Onboarding';

/**
 * 하위상점의 전자결제 신청 정보를 가져오기 (호스팅사 > 포트원)
 *
 * 하위상점 등록 API를 통해서 호스팅사의 사업자 정보를 포트원에 전달하면 전자결제 신청을 위해 하위상점의 전자결제 신청 정보, 계약 진행 상태 정보를 가져옵니다.
 */
export const getStoreApplication = async (
  access_token: string,
  params: GetStoreApplicationParams,
) => {
  const {store_id, ...queries} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/stores/${store_id}/applications`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    params: {...queries},
  });
  return response.data as GetStoreApplicationResponse;
};

/**
 * 온보딩 API 를 통해 전자결제 신청하기 (호스팅사 > 포트원 > 결제대행사)
 *
 * 호스팅사 고객의 사업자 정보를 기반으로 생성된 스토어 식별코드로 전자 결제를 신청합니다.
 */
export const requestApplications = async (
  access_token: string,
  params: GetStoreApplicationParams,
) => {
  const {store_id, ...queries} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/stores/${store_id}/applications`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    params: {...queries},
  });
  return response.data as GetStoreApplicationResponse;
};
