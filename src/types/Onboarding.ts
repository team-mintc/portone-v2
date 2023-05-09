import {ApiException, ExceptionCode} from './ApiException';
import {
  ApplicationByPgCompany,
  ApplicationPublic,
  PgSpecificInfo,
  TosspaymentsApplicationUrl,
} from './Common';

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

export interface RequestApplicationsParams extends GetStoreApplicationParams {
  /** pg사 기준으로 묶은 application */
  applications: ApplicationByPgCompany;
  /** PG사별 특수값 */
  pg_specific_info: PgSpecificInfo;
}

export interface RequestApplicationsResponse {
  /** 전자결제 신청내역 */
  applications: ApplicationPublic[];
}

export interface RequestApplicationsException
  extends Omit<ApiException, 'code'> {
  code: ExceptionCode;
}

export interface GetTossPaymentsStatusAndUrlParams {
  /** store의 id */
  store_id?: string;
}

export interface GetTossPaymentsStatusAndUrlResponse {
  urls: TosspaymentsApplicationUrl[];
}

export interface GetTossPaymentsStatusAndUrlException
  extends Omit<ApiException, 'code'> {
  code: ExceptionCode;
}
