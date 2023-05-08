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

export type InstantPaymentExceptionCode =
  | PaymentExceptionCode
  | 'PG_PROVIDER_ERROR'
  | 'PERMISSION_DENIED'
  | 'STORE_NOT_FOUND'
  | 'CHANNEL_NOT_FOUND'
  | 'TAX_FREE_AMOUNT_MUST_BE_LESS_THAN_OR_EQUAL_TO_TOTAL_AMOUNT'
  | 'PAYMENT_ALREADY_PAID';

export type EscrowLogisExceptionCode =
  | PaymentExceptionCode
  | 'NOT_PAID'
  | 'PERMISSION_DENIED'
  | 'STORE_NOT_FOUND'
  | 'PAYMENT_NOT_FOUND'
  | 'PG_PROVIDER_ERROR';

export type EscrowCompleteExceptionCode = EscrowLogisExceptionCode;

export type CancelSchedulesExceptionCode =
  | ExceptionCode
  | 'SCHEDULE_ALREADY_PROCESSED';

export type GetScheduleExceptionCode = ExceptionCode | 'SCHEDULE_NOT_FOUND';

export type GetChannelExceptionCode =
  | ExceptionCode
  | 'CHANNEL_NOT_FOUND'
  | 'PERMISSION_DENIED';

export type GetCashReceiptExceptionCode =
  | PaymentExceptionCode
  | 'CASH_RECEIPT_NOT_FOUND';

export type IssueCashReceiptExceptionCode =
  | ExceptionCode
  | 'CASH_RECEIPT_ALREADY_ISSUED'
  | 'PERMISSION_DENIED'
  | 'STORE_NOT_FOUND'
  | 'CHANNEL_NOT_FOUND'
  | 'PG_PROVIDER_ERROR';

export type CancelCashReceiptExceptionCode =
  | PaymentExceptionCode
  | 'CASH_RECEIPT_NOT_FOUND'
  | 'CASH_RECEIPT_NOT_ISSUED'
  | 'PG_PROVIDER_ERROR';

export type IssueBillingKeyExceptionCode =
  | ExceptionCode
  | 'PG_PROVIDER_ERROR'
  | 'PERMISSION_DENIED'
  | 'STORE_NOT_FOUND'
  | 'CHANNEL_NOT_FOUND';

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
