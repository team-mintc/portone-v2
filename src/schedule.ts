import axios from 'axios';
import {
  CancelScheduleParam,
  CancelScheduleResponse,
  GetScheduleParam,
  GetScheduleResponse,
  GetSchedulesParam,
  GetSchedulesResponse,
} from 'types/Schedule';

/**
 * 정기결제예약 다건 조회
 */
export const getSchedules = async (
  access_token: string,
  params: GetSchedulesParam,
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
  return response.data as GetSchedulesResponse;
};

/**
 * 빌링키 정기결제예약 취소
 */
export const cancelSchedules = async (
  access_token: string,
  params: CancelScheduleParam,
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
  return response.data as CancelScheduleResponse;
};

/**
 * 정기결제예약 단건 조회
 */
export const getSchedule = async (
  access_token: string,
  params: GetScheduleParam,
) => {
  const {schedule_id, ...queries} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/schedules/${schedule_id}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    params: {...queries},
  });
  return response.data as GetScheduleResponse;
};
