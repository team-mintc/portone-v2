import {
  ApiException,
  DeleteBillingKeyExceptionCode,
  ExceptionCode,
  GetBillingKeyExceptionCode,
  IssueBillingKeyExceptionCode,
} from './ApiException';
import {
  BillingKey,
  CustomerForm,
  InstantBillingKeyPaymentMethodForm,
} from './Common';

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

export interface IssueBillingKeyParams {
  /** 하위상점 ID */
  store_id?: string;
  /** 고객 정보 */
  customer?: CustomerForm;
  custom_data?: string;
  /** 결제 채널 이름 */
  channel_name: string;
  /** 가능한 결제 수단: 카드, 휴대폰 소액 결제 선택한 결제 수단에 따라 card와 mobile_phone 중 하나에만 값이 들어있어야 합니다. */
  payment_method_option: InstantBillingKeyPaymentMethodForm;
}

export interface IssueBillingKeyResponse {
  billing_key: string;
  customer_id: string;
  requested_at: string;
  issued_at: string;
}

export interface IssueBillingKeyException extends Omit<ApiException, 'code'> {
  code: IssueBillingKeyExceptionCode;
}

export interface GetBillingKeyParams {
  /** 빌링키 */
  billing_key: string;
  /** 하위상점 ID (Merchant 유저가 store_id를 명시하지 않으면, Merchant 유저의 대표 상점 id가 입력됨) */
  store_id?: string;
}

export interface GetBillingKeyResponse {
  /** 빌링키 정보 */
  billing_keys: BillingKey;
}

export interface GetBillingKeyException extends Omit<ApiException, 'code'> {
  code: GetBillingKeyExceptionCode;
}

export interface DeleteBillingKeyParams {
  /** 빌링키 */
  billing_key: string;
  /** 하위상점 ID (Merchant 유저가 store_id를 명시하지 않으면, Merchant 유저의 대표 상점 id가 입력됨) */
  store_id?: string;
}

export interface DeleteBillingKeyResponse {
  /** 빌링키 삭제 시각 */
  deleted_at: string;
}

export interface DeleteBillingKeyException extends Omit<ApiException, 'code'> {
  code: DeleteBillingKeyExceptionCode;
}
