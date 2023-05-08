import axios from 'axios';
import {GetChannelParams, GetChannelResponse} from 'types/Channel';

/**
 * 하위상점 다건 조회
 */
export const getStores = async (
  access_token: string,
  params: GetChannelParams,
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
  return response.data as GetChannelResponse;
};
