import {ApiException, ExceptionCode} from './ApiException';
import {Schedule, ScheduleStatus} from './common';

interface ScheduleCommonParam {
  /** 하위 상점 ID - 값을 넣지 않으면 Merchant 유저의 기본값으로 설정된 상점의 id가 입력됩니다. */
  store_id?: string;
}

export interface ScheduleParam extends ScheduleCommonParam {
  /** 결제예약시각(scheduled_at) 범위의 시작 - 값을 넣지 않으면 파라미터 end의 90일 전으로 설정됩니다. */
  start: string;
  /** 결제예약시각(scheduled_at) 범위의 끝 - 값을 넣지 않으면 현재 시각으로 설정됩니다 */
  end: string;
  /** 결제예약 상태 리스트 */
  status?: ScheduleStatus;
  /** 페이지 - 0부터 시작합니다. */
  page?: number;
  /** 페이지 크기 (최대 1000까지 허용) */
  limit?: number;
}

export interface ScheduleResponse {
  current_page: number;
  total_page: number;
  total_count: number;
  /** 결제예약정보 */
  schedules: Schedule[];
}

export interface EscrowCompleteException extends Omit<ApiException, 'code'> {
  code: ExceptionCode;
}
