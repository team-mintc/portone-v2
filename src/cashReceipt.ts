import axios from 'axios';
import {
  GetCashReceiptParams,
  GetCashReceiptResponse,
  IssueCashReceiptParams,
  IssueCashReceiptResponse,
} from 'types/CashReceipt';

/**
 * 현금영수증 조회
 */
export const getCashReceipt = async (
  access_token: string,
  params: GetCashReceiptParams,
) => {
  const {payment_id, ...queries} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/payments/${payment_id}/cash-receipt`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    params: {...queries},
  });
  return response.data as GetCashReceiptResponse;
};

/**
 * 현금영수증 발급
 *
 * 결제 건에 대한 수동 현금영수증 발급
 */
export const issueCashReceipt = async (
  access_token: string,
  params: IssueCashReceiptParams,
) => {
  const {payment_id, ...data} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/payments/${payment_id}/cash-receipt`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    data,
  });
  return response.data as IssueCashReceiptResponse;
};
