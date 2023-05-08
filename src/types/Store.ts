import {ApiException, ExceptionCode} from './ApiException';
import {
  PublicStoreBusinessLicense,
  PublicStoreRepresentativeRequest,
  PublicStoreRepresentativeResponse,
  PublicStoreResponse,
} from './common';

export interface GetStoresParams {}

export interface GetStoresResponse {
  /** store 목록 */
  stores: PublicStoreResponse[];
}

export interface GetStoresException extends Omit<ApiException, 'code'> {
  code: ExceptionCode;
}

export interface CreateStoreParams {
  /** 상점 이름 */
  name: string;
  /** 상점 식별 코드 ex) ABC 영문, 숫자 3자리 */
  tier_code: string;
  /** 서비스 url 리스트 */
  service_urls: string[];
  /** 담당자명 */
  manager_name: string;
  /** 담당자 휴대폰번호 */
  manager_phone_number: string;
  /** 담당자 이메일 */
  manager_email: string;
  /** 상점 대표자 정보 */
  representative: PublicStoreRepresentativeRequest;
  /** 사업자 정보 */
  business_license: PublicStoreBusinessLicense;
  /**
   * 약관 동의 여부, 두 가지 필수 약관 모두 동의 필요
   *
   * 첫번째 약관: 개인정보 수집 동의
   *
   * 두번째 약관: 상위 가맹점에게 상점 정보 제공 동의
   *
   * ex) 두 약관 모두 동의 [true, true] */
  term_agreed: boolean[];
}

export interface CreateStoreResponse {
  /** 상점 아이디 */
  id: string;
  /** 상점 이름 */
  name: string;
  /** 상점 식별 코드 ex) ABC 영문, 숫자 3자리 */
  tier_code: string;
  /** 서비스 url 리스트 */
  service_urls: string[];
  /** 담당자명 */
  manager_name?: string;
  /** 담당자 휴대폰번호 */
  manager_phone_number?: string;
  /** 담당자 이메일 */
  manager_email?: string;
  /** 상점 대표자 정보 */
  representative: PublicStoreRepresentativeResponse;
  /** 사업자 정보 */
  business_license: PublicStoreBusinessLicense;
}

export interface CreateStoreException extends Omit<ApiException, 'code'> {
  code: ExceptionCode;
}

export interface GetStoreParams {
  /** store의 id */
  store_id: string;
}

export interface GetStoreResponse extends CreateStoreResponse {}

export interface GetStoreException extends Omit<ApiException, 'code'> {
  code: ExceptionCode;
}
