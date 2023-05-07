import axios from 'axios';
import {
  CancelPaymentParam,
  CancelPaymentResponse,
  PaymentParam,
  PaymentResponse,
  PaymentsParam,
} from 'types/Payment';

/**
 * 결제내역 단건조회
 *
 * 결제가 발생한 이후 즉시 조회가 가능한 API입니다.
 */
export const getPaymentDetails = async (
  access_token: string,
  params: PaymentParam,
) => {
  const {payment_id, ...queries} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/payments/${payment_id}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    params: {...queries},
  });
  return response.data as PaymentResponse;
};

/**
 * 결제내역 다건조회
 *
 * 결제내역들을 조회할 수 있는 API입니다. 실제 결제 발생 이후 조회되기까지 지연이 있으니 검증을 위해서는 결제내역 단건조회를 이용해주세요. 현재 page * limit이 50000 이상이 되는 쿼리를 허용하지 않는 제약을 갖고있습니다. 많은 양의 데이터를 받아올 경우 날짜범위를 좁혀서 사용해주세요. 추후 50000개 이상 대량의 데이터를 한번에 편리하게 쿼리할 수 있도록 하는 수정이 예정되어있습니다.
 */
export const getPaymentsDetails = async (
  access_token: string,
  params: PaymentsParam,
) => {
  const response = await axios({
    url: `https://api.portone.io/v2/payments`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    params: {...params},
  });
  return response.data as PaymentResponse;
};

/**
 * 결제 취소
 */
export const cancelPayment = async (
  access_token: string,
  params: CancelPaymentParam,
) => {
  const {payment_id, store_id, ...data} = params;
  const response = await axios({
    url: `https://api.portone.io/v2/payments/${payment_id}/cancel`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    params: {store_id},
    data,
  });
  return response.data as CancelPaymentResponse;
};
