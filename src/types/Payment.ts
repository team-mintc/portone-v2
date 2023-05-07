import {ApiException, PaymentExceptionCode} from './ApiException';
import {Payment, PaymentMethod, PgProvider, TransactionStatus} from './common';

export interface PaymentParam {
  /** 결제 ID */
  payment_id: string;
  /** 하위 상점 ID - 값을 넣지 않으면 Merchant 유저의 기본값으로 설정된 상점의 id가 입력됩니다. */
  store_id?: string;
}

export interface PaymentResponse {
  /** 결제내역 */
  payment: Payment;
}

export interface PaymentException extends Omit<ApiException, 'code'> {
  code: PaymentExceptionCode;
}

export interface PaymentsParam {
  /** 하위 상점 ID - Merchant 사용자만 사용가능하며, 지정되지 않은 경우 가맹점 전체 결제건을 조회합니다. */
  store_id?: string;
  /** 결제 상태 승인시각 범위의 시작 - 값을 넣지 않으면 end의 90일 전으로 설정됩니다. (결제건의 최종 상태에 따라 다른 검색기준이 적용됩니다. 'ready' -> 결제시작 시각 기준, 'paid' -> 결제완료 시각 기준, 'cancelled' -> 결제취소 시각 기준, 'failed' -> 결제실패 시각 기준) */
  start?: string;
  /** 결제 상태 승인시각 범위의 끝 - 값을 넣지 않으면 현재 시각으로 설정됩니다. (결제건의 최종 상태에 따라 다른 검색기준이 적용됩니다. 'ready' -> 결제시작 시각 기준, 'paid' -> 결제완료 시각 기준, 'cancelled' -> 결제취소 시각 기준, 'failed' -> 결제실패 시각 기준) */
  end?: string;
  /** 결제상태 리스트 - 값을 넣지 않으면 결제상태 필터링이 적용되지 않습니다. */
  status?: TransactionStatus[];
  /** 결제수단 리스트 - 값을 넣지 않으면 결제수단 필터링이 적용되지 않습니다. */
  methods?: PaymentMethod[];
  /** 결제대행사 리스트 - 값을 넣지 않으면 결제대행사 필터링이 적용되지 않습니다. */
  pg_providers?: PgProvider[];
  /** 테스트결제 필터링 */
  is_test_payment?: boolean;
  /** 정기결제 필터링 */
  is_scheduled_payment?: boolean;
  /** 통합검색 항목 */
  text_search_column?: string;
  /** 통합검색 입력값 */
  text_search_value?: string;
  /** 페이지 - 0부터 시작합니다. */
  page?: number;
  /** 페이지 크기 (최대 1000까지 허용) */
  limit?: number;
  /** 정렬 기준 REQUESTED_AT: 결제요청시각 STATUS_UPDATED_AT: 상태변경시각 */
  sort_by: 'REQUESTED_AT' | 'STATUS_UPDATED_AT';
  /** 정렬 방향 DESCENDING: 내림차순 ASCENDING: 오름차순 */
  sort_order: 'DESCENDING' | 'ASCENDING';
}
