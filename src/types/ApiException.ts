export type ExceptionCode =
  | 'INVALID_REQUEST'
  | 'UNAUTHORIZED'
  | 'PORTONE_ERROR';
export type PaymentExceptionCode = ExceptionCode | 'PAYMENT_NOT_FOUND';
export type CancelPaymentExceptionCode =
  | PaymentExceptionCode
  | 'PG_PROVIDER_ERROR'
  | 'NOT_PAID'
  | 'PAYMENT_ALREADY_CANCELLED'
  | 'REFUNDABLE_AMOUNT_CONSISTENCY_BROKEN'
  | 'CANCEL_AMOUNT_MUST_BE_LESS_THAN_OR_EQUAL_TO_CANCELLABLE_AMOUNT'
  | 'CANCEL_TAX_FREE_AMOUNT_MUST_BE_LESS_THAN_OR_EQUAL_TO_CANCEL_AMOUNT'
  | 'CANCEL_TAX_FREE_AMOUNT_MUST_BE_LESS_THAN_OR_EQUAL_TO_CANCELLABLE_TAX_FREE_AMOUNT'
  | 'CANCEL_TAX_AMOUNT_MUST_BE_LESS_THAN_OR_EQUAL_TO_CANCELLABLE_TAX_AMOUNT';
export type ResendWebhookExceptionCode = PaymentExceptionCode | 'WEBHOOK_ERROR';
export type NoticeVirtualAccountDepositExceptionCode = PaymentExceptionCode;
export type SchedulePaymentExceptionCode =
  | PaymentExceptionCode
  | 'PAST_SCHEDULED'
  | 'PAYMENT_ALREADY_EXISTS'
  | 'PAYMENT_ALREADY_SCHEDULED'
  | 'BILLING_KEY_DELETED'
  | 'PERMISSION_DENIED'
  | 'STORE_NOT_FOUND'
  | 'BILLING_KEY_NOT_FOUND';
export type BillingKeyPaymentExceptionCode =
  | PaymentExceptionCode
  | 'TAX_FREE_AMOUNT_MUST_BE_LESS_THAN_OR_EQUAL_TO_TOTAL_AMOUNT'
  | 'BILLING_KEY_ALREADY_DELETED'
  | 'PAYMENT_ALREADY_PAID'
  | 'PERMISSION_DENIED'
  | 'STORE_NOT_FOUND'
  | 'BILLING_KEY_NOT_FOUND'
  | 'PG_PROVIDER_ERROR';

export interface ApiException {
  /**
   * 에러 코드
   */
  code: ExceptionCode;
  /**
   * 에러 세부사항
   */
  params: {
    /**
     * 에러 메시지
     */
    message: string;
  };
}
