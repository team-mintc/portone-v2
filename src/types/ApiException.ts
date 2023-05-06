export interface ApiException {
  /**
   * 에러 코드
   */
  code: string;
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
