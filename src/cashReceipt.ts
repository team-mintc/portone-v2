import axios from 'axios';
import {GetCashReceiptParams, GetCashReceiptResponse} from 'types/CashReceipt';

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
