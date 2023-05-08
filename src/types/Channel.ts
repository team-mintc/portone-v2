import {ApiException, GetChannelExceptionCode} from './ApiException';
import {ChannelV2} from './common';

export interface GetChannelParams {
  /** 하위상점 ID (Merchant 유저가 store_id를 명시하지 않으면, Merchant 유저의 대표 상점 id가 입력됨) */
  store_id?: string;
}

export interface GetChannelResponse {
  /** V2 결제를 지원하는 채널 */
  channel: ChannelV2[];
}

export interface GetChannelException extends Omit<ApiException, 'code'> {
  code: GetChannelExceptionCode;
}
