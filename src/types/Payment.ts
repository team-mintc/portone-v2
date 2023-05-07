import {
  ApiException,
  BillingKeyPaymentExceptionCode,
  CancelPaymentExceptionCode,
  InstantPaymentExceptionCode,
  NoticeVirtualAccountDepositExceptionCode,
  PaymentExceptionCode,
  ResendWebhookExceptionCode,
  SchedulePaymentExceptionCode,
} from './ApiException';
import {
  BillingKeyPayment,
  CustomerForm,
  CustomerFormWithoutId,
  InstantPaymentMethodForm,
  Payment,
  PaymentMethod,
  PgProvider,
  RefundAccount,
  TransactionStatus,
} from './common';

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

export interface CancelPaymentParam extends PaymentParam {
  /** 취소 사유 */
  reason?: string;
  /** 취소 금액 - 값을 넣지 않으면 전액 취소됩니다. */
  cancel_amount?: number;
  /** 취소 금액 중 면세 금액 - 값을 넣지 않으면 전액 과세됩니다. */
  tax_free_amount?: number;
  /** 취소 금액 중 부가세 금액 (PG사 기본값: null). 결제 시 부가세를 지정했던 경우 필수 입력 바랍니다. 지원되는 PG사: 나이스페이먼츠(NICE), 이니시스(HTML5_INICIS) */
  vat_amount?: number;
  /** 결제 건의 취소 가능 잔액 - 값을 넣지 않으면 별도의 검증 처리를 수행하지 않습니다. */
  check_refundable_amount?: number;
  /** 환불 계좌 정보 - 가상계좌 결제인 경우에만 기입할 수 있습니다. */
  refund?: RefundAccount;
}

export interface CancelPaymentResponse extends PaymentResponse {
  /** 취소 대상 거래 아이디 */
  cancelled_tx_id: string;
  /** 취소 아이디 */
  cancellation_id: string;
}

export interface CancelPaymentException extends Omit<ApiException, 'code'> {
  code: CancelPaymentExceptionCode;
}

export interface ResendWebhookParam extends PaymentParam {
  /** 재발송 대상 트랜잭션 아이디 - 값을 넣지 않으면 기본값은 대표 트랜잭션 아이디로 설정됩니다. */
  tx_id?: string;
  /** 재발송 대상 웹훅 아이디 - 값을 넣지 않으면 기본값은 가장 최근의 웹훅 아이디로 설정됩니다. */
  webhook_id?: string;
}

export interface WebhookResponse extends PaymentResponse {
  /** 재발송 대상 트랜잭션 아이디 */
  tx_id: string;
  /** 재발송 대상 웹훅 아이디 (값을 넣지 않으면 가장 최근의 웹훅 아이디 기준으로 재전송) 비동기 웹훅이거나 웹훅 처리에 너무 오랜 시간이 걸리는 경우 값이 비어있을 수 있습니다. */
  webhook_id: string;
}

export interface ResendWebhookResponse extends WebhookResponse {}

export interface ResendWebhookException extends Omit<ApiException, 'code'> {
  code: ResendWebhookExceptionCode;
}

export interface NoticeVirtualAccountDepositParam extends PaymentParam {}

export interface NoticeVirtualAccountDepositResponse extends WebhookResponse {}

export interface NoticeVirtualAccountDepositException
  extends Omit<ApiException, 'code'> {
  code: NoticeVirtualAccountDepositExceptionCode;
}

export interface SchedulePaymentParam extends BillingKeyPayment, PaymentParam {
  /** 빌링키 결제를 진행하는 상점의 id */
  store_id?: string;
  scheduled_at: string;
}

export interface SchedulePaymentResponse {
  id: string;
  scheduled_at: string;
}

export interface SchedulePaymentException extends Omit<ApiException, 'code'> {
  code: SchedulePaymentExceptionCode;
}

export interface BillingKeyPaymentParam
  extends BillingKeyPayment,
    PaymentParam {
  /** 빌링키 결제를 진행하는 상점의 id */
  store_id?: string;
  /** 고객 정보 */
  customer?: CustomerFormWithoutId;
}

export interface BillingKeyPaymentResponse {
  tx_id: string;
  customer_id: string;
  requested_at: string;
  paid_at: string;
  /** PG사 거래ID */
  pg_tx_id: string;
}

export interface BillingKeyPaymentException extends Omit<ApiException, 'code'> {
  code: BillingKeyPaymentExceptionCode;
}

export interface InstantPaymentParam
  extends Pick<
      BillingKeyPayment,
      | 'order_name'
      | 'is_cultural_expense'
      | 'is_escrow'
      | 'products'
      | 'custom_data'
      | 'total_amount'
      | 'custom_data'
      | 'country'
      | 'currency'
      | 'notice_urls'
      | 'product_type'
      | 'product_count'
    >,
    PaymentParam {
  /** 빌링키 결제를 진행하는 상점의 id */
  store_id?: string;
  /** 고객 정보 */
  customer?: CustomerForm;
  /** 면세 금액 (기본값: 0) */
  tax_free_amount?: number;
  /** 결제 채널 이름 */
  channel_name: string;
  /** 가능한 결제 수단: 카드, 가상계좌 선택한 결제 수단에 따라 card와 virtual_account 중 하나에만 값이 들어있어야 합니다. */
  payment_method_option: InstantPaymentMethodForm;
}

export interface InstantPaymentResponse {
  tx_id: string;
  customer_id: string;
  requested_at: string;
  paid_at: string;
  /** PG사 거래ID */
  pg_tx_id: string;
}

export interface InstantPaymentException extends Omit<ApiException, 'code'> {
  code: InstantPaymentExceptionCode;
}
