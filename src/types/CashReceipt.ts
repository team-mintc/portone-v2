import {
  ApiException,
  GetCashReceiptExceptionCode,
  IssueCashReceiptExceptionCode,
} from './ApiException';
import {
  CashReceiptDetail,
  CashReceiptType,
  Currency,
  ProductType,
} from './common';
import {PaymentParam} from './Payment';

export interface GetCashReceiptParams extends PaymentParam {}

export interface GetCashReceiptResponse {
  /** 현금영수증 정보 */
  receipt: CashReceiptDetail[];
}

export interface GetCashReceiptException extends Omit<ApiException, 'code'> {
  code: GetCashReceiptExceptionCode;
}

export interface IssueCashReceiptParams extends PaymentParam {
  channel_name: string;
  customer_identifier: string;
  /** 
  : 현금영수증 용도.
  : 
  : PERSONAL = 소득공제용, CORPORATE = 지출증빙용, ANONYMOUS = 국세청번호 자동발급 케이스
   */
  type: CashReceiptType;
  order_name: string;
  /** 화폐 */
  currency: Currency;
  amount: number;
  /** 면세 금액 (기본값: "0") */
  tax_free_amount?: number;
  /** 상품 유형 */
  product_type?: ProductType;
  /** 고객 성명 */
  customer_name?: string;
  /** 고객 이메일 */
  customer_email?: string;
}

export interface IssueCashReceiptResponse {
  /** 현금영수증 ID */
  receipt_id: string;
  /** PG사 거래ID */
  pg_tx_id: string;
  issue_number: string;
  receipt_url: string;
}

export interface IssueCashReceiptException extends Omit<ApiException, 'code'> {
  code: IssueCashReceiptExceptionCode;
}
