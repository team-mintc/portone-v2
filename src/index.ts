import {ApiException} from 'types/ApiException';
import {Token} from 'types/Auth';
import _ from 'lodash';

import {
  cancelPayment,
  escrowComplete,
  escrowLogis,
  getPaymentDetails,
  getPaymentsDetails,
  noticeVirtualAccountDeposit,
  payBillingKey,
  payInstant,
  resendWebhook,
  schedulesPayment,
} from 'payment';
import {refreshToken, signIn} from 'auth';
import {cancelSchedules, getSchedule, getSchedules} from 'schedule';
import {getChannels} from 'channel';
import {cancelCashReceipt, getCashReceipt, issueCashReceipt} from 'cashReceipt';
import {getBillingKey, getBillingKeys, issueBillingKey} from 'billingKey';

export * from '@portone/browser-sdk/v2';

export const init = async (api_key: string) => {
  let tokens: Token = await signIn({api_key});

  const handleRefresh = async <T, R>(
    func: (access_token: string, params: T) => R,
    params: T,
  ) => {
    try {
      const result = await func(tokens.access_token, params);
      return result;
    } catch (error) {
      if ((error as ApiException).code === 'UNAUTHORIZED') {
        tokens = await refreshToken({refresh_token: tokens.refresh_token});
        const result = await func(tokens.access_token, params);
        return result;
      }
    }
  };

  const withToken = <T, R>(func: (access_token: string, params: T) => R) => {
    return (params: T) => handleRefresh(func, params);
  };

  return {
    getPaymentDetails: withToken(getPaymentDetails),
    getPaymentsDetails: withToken(getPaymentsDetails),
    cancelPayment: withToken(cancelPayment),
    resendWebhook: withToken(resendWebhook),
    noticeVirtualAccountDeposit: withToken(noticeVirtualAccountDeposit),
    schedulesPayment: withToken(schedulesPayment),
    payBillingKey: withToken(payBillingKey),
    payInstant: withToken(payInstant),
    escrowLogis: withToken(escrowLogis),
    escrowComplete: withToken(escrowComplete),
    getSchedules: withToken(getSchedules),
    cancelSchedules: withToken(cancelSchedules),
    getSchedule: withToken(getSchedule),
    getChannels: withToken(getChannels),
    getCashReceipt: withToken(getCashReceipt),
    issueCashReceipt: withToken(issueCashReceipt),
    cancelCashReceipt: withToken(cancelCashReceipt),
    getBillingKeys: withToken(getBillingKeys),
    issueBillingKey: withToken(issueBillingKey),
    getBillingKey: withToken(getBillingKey),
  };
};
