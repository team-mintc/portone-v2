import axios from 'axios';
import {ScheduleParam, ScheduleResponse} from 'types/Schedule';

/**
 * 정기결제예약 다건 조회
 */
export const getSchedules = async (
  access_token: string,
  params: ScheduleParam,
) => {
  const {...queries} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/schedules`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    params: {...queries},
  });
  return response.data as ScheduleResponse;
};

/**
 * 빌링키 정기결제예약 취소
 */
export const cancelSchedules = async (
  access_token: string,
  params: ScheduleParam,
) => {
  const {...queries} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/schedules`,
    method: 'delete ',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    params: {...queries},
  });
  return response.data as ScheduleResponse;
};
