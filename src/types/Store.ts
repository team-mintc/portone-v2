import {ApiException, ExceptionCode} from './ApiException';
import {PublicStoreResponse} from './common';

export interface GetStoresParams {}

export interface GetChannelResponse {
  /** store 목록 */
  stores: PublicStoreResponse[];
}

export interface GetChannelException extends Omit<ApiException, 'code'> {
  code: ExceptionCode;
}
