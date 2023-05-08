import axios from 'axios';
import {GetChannelParams, GetChannelResponse} from 'types/Channel';

/**
 * 채널 불러오기
 */
export const getChannels = async (
  access_token: string,
  params: GetChannelParams,
) => {
  const {...queries} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/channels`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    params: {...queries},
  });
  return response.data as GetChannelResponse;
};
