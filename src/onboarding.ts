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
