export type ExceptionCode =
  | 'INVALID_REQUEST'
  | 'UNAUTHORIZED'
  | 'PORTONE_ERROR';
export type PaymentExceptionCode = ExceptionCode | 'PAYMENT_NOT_FOUND';
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
