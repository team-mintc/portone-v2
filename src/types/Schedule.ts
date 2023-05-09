import {
  ApiException,
  CancelSchedulesExceptionCode,
  ExceptionCode,
  GetScheduleExceptionCode,
} from './ApiException';
import {Schedule, ScheduleStatus} from './Common';

interface ScheduleCommonParam {
  /** 하위 상점 ID - 값을 넣지 않으면 Merchant 유저의 기본값으로 설정된 상점의 id가 입력됩니다. */
  store_id?: string;
}

export interface GetSchedulesParam extends ScheduleCommonParam {
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

export interface GetSchedulesResponse {
  current_page: number;
  total_page: number;
  total_count: number;
  /** 결제예약정보 */
  schedules: Schedule[];
}

export interface GetSchedulesException extends Omit<ApiException, 'code'> {
  code: ExceptionCode;
}

export interface CancelScheduleParam extends ScheduleCommonParam {
  /** 정기결제예약 빌링키 */
  billing_key: string;
  /** 삭제할 정기결제예약 아이디 목록, 비어있을 경우 빌링키로 예약한 모든 예약을 취소함 */
  schedule_id?: string[];
}

export interface CancelScheduleResponse {
  /** 삭제된 정기결제예약 아이디 목록 */
  deleted_schedule_ids: string[];
}

export interface CancelScheduleException extends Omit<ApiException, 'code'> {
  code: CancelSchedulesExceptionCode;
}

export interface GetScheduleParam {
  /** 정기결제예약 ID */
  schedule_id: string;
}

export interface GetScheduleResponse {
  /** 결제예약정보 */
  schedules: Schedule[];
}

export interface GetScheduleException extends Omit<ApiException, 'code'> {
  code: GetScheduleExceptionCode;
}
