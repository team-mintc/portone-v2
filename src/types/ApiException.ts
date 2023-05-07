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
