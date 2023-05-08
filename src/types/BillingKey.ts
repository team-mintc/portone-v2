import {ApiException, ExceptionCode} from './ApiException';
import {BillingKey, ChannelV2} from './common';

export interface GetBillingKeysParams {
  /** 빌링키 */
  billing_key: string[];
  /** 하위상점 ID (Merchant 유저가 store_id를 명시하지 않으면, Merchant 유저의 대표 상점 id가 입력됨) */
  store_id?: string;
}

export interface GetBillingKeysResponse {
  /** 빌링키 정보 */
  billing_keys: BillingKey[];
}

export interface GetBillingKeysException extends Omit<ApiException, 'code'> {
  code: ExceptionCode;
}
