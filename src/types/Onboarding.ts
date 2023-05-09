import {ApiException, ExceptionCode} from './ApiException';
import {ApplicationPublic} from './common';

export interface GetStoreApplicationParams {
  /** store의 id */
  store_id?: string;
}

export interface GetStoreApplicationResponse {
  /** 전자결제 신청내역 */
  applications: ApplicationPublic[];
}

export interface GetStoreApplicationException
  extends Omit<ApiException, 'code'> {
  code: ExceptionCode;
}
