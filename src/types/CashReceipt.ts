import {
  ApiException,
  GetCashReceiptExceptionCode,
  GetChannelExceptionCode,
} from './ApiException';
import {CashReceiptDetail, ChannelV2} from './common';
import {PaymentParam} from './Payment';

export interface GetCashReceiptParams extends PaymentParam {}

export interface GetCashReceiptResponse {
  /** 현금영수증 정보 */
  receipt: CashReceiptDetail[];
}

export interface GetCashReceiptException extends Omit<ApiException, 'code'> {
  code: GetCashReceiptExceptionCode;
}
