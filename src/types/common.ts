export type Version = 'V1' | 'V2';

export type PaymentMethod =
  | 'CARD'
  | 'TRANSFER'
  | 'VIRTUAL_ACCOUNT'
  | 'MOBILE'
  | 'GIFT_CERTIFICATE'
  | 'EASY_PAY';
export type ChannelType = 'LIVE' | 'TEST';
export type PgProvider =
  | 'HTML5_INICIS'
  | 'PAYPAL'
  | 'PAYPAL_V2'
  | 'INICIS'
  | 'DANAL'
  | 'NICE'
  | 'DANAL_TPAY'
  | 'JTNET'
  | 'UPLUS'
  | 'NAVERPAY'
  | 'KAKAO'
  | 'SETTLE'
  | 'KCP'
  | 'MOBILIANS'
  | 'KAKAOPAY'
  | 'NAVERCO'
  | 'SYRUP'
  | 'KICC'
  | 'EXIMBAY'
  | 'SMILEPAY'
  | 'PAYCO'
  | 'KCP_BILLING'
  | 'ALIPAY'
  | 'PAYPLE'
  | 'CHAI'
  | 'BLUEWALNUT'
  | 'SMARTRO'
  | 'SMARTRO_V2'
  | 'PAYMENTWALL'
  | 'TOSSPAYMENTS'
  | 'KCP_QUICK'
  | 'DAOU'
  | 'GALAXIA'
  | 'TOSSPAY'
  | 'KCP_DIRECT'
  | 'SETTLE_ACC'
  | 'SETTLE_FIRM'
  | 'INICIS_UNIFIED'
  | 'KSNET'
  | 'PINPAY';
export type WebhookStatus = 'SUCCEEDED' | 'REQUEST_FAILED' | 'CONNECT_FAILED';
export type WebhookType =
  | 'READY'
  | 'PAID'
  | 'FAILED'
  | 'CANCELLED'
  | 'PARTIAL_CANCELLED'
  | 'VIRTUAL_ACCOUNT_ISSUED'
  | 'CANCEL_PENDING';
export type WebhookTrigger =
  | 'NOTIFICATION_SETTING'
  | 'MANUAL'
  | 'VIRTUAL_ACCOUNT_DEPOSIT'
  | 'ASYNC_CANCEL_APPROVED';
export type TransactionStatus =
  | 'READY'
  | 'PENDING'
  | 'VIRTUAL_ACCOUNT_ISSUED'
  | 'PAID'
  | 'FAILED'
  | 'PARTIAL_CANCELLED'
  | 'CANCELLED';
export interface WebhookRequest {
  /** 요청 header */
  header?: object;
  /** 요청 body */
  body: string;
  /** 요청 시각 */
  requested_at?: string;
}
export interface WebhookResponse {
  /** 웹훅 응답 http 코드 */
  code: string;
  /** 응답 header */
  header: object;
  /** 응답 body */
  body: string;
  /** 응답 시각 */
  responded_at: string;
}

export interface Webhook {
  /** 웹훅 ID */
  id: string;
  /** 웹훅 전송 상태 */
  status?: WebhookStatus;
  /** 웹훅 유형 */
  type?: WebhookType;
  /** 웹훅이 발송된 url */
  url: string;
  /** 비동기 웹훅 여부 */
  is_async?: boolean;
  /** 현재 발송 횟수 */
  current_execution?: number;
  /** 최대 발송 횟수 */
  max_execution?: number;
  /** 웹훅 실행 주체 */
  webhook_trigger?: WebhookTrigger;
  /** 웹훅 요청 정보 */
  request?: WebhookRequest;
  /** 웹훅 응답 정보 */
  response?: WebhookResponse;
  /** 웹훅 처리 시작 시각 */
  triggered_at?: string;
}

export interface Notification {
  /** 웹훅 정보 */
  webhook?: Webhook;
}
export interface Channel {
  /** 채널 ID */
  id?: string;
  /** 채널 이름 */
  name?: string;
  /** 채널 유형 */
  type: ChannelType;
  /** 결제대행사(PG사) */
  pg_provider: PgProvider;
  /** PG사에 등록된 가맹점 ID */
  pg_merchant_id: string;
}

export type Currency =
  | 'KRW'
  | 'USD'
  | 'EUR'
  | 'JPY'
  | 'CNY'
  | 'VND'
  | 'THB'
  | 'SGD'
  | 'AUD'
  | 'HKD'
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BOV'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLF'
  | 'CLP'
  | 'COP'
  | 'COU'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MXV'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SHP'
  | 'SLE'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STN'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USN'
  | 'UYI'
  | 'UYU'
  | 'UYW'
  | 'UZS'
  | 'VED'
  | 'VES'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XAG'
  | 'XAU'
  | 'XBA'
  | 'XBB'
  | 'XBC'
  | 'XBD'
  | 'XCD'
  | 'XDR'
  | 'XOF'
  | 'XPD'
  | 'XPF'
  | 'XPT'
  | 'XSU'
  | 'XTS'
  | 'XUA'
  | 'XXX'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
  | 'ZWL';
export interface TransactionAmount {
  /** 통화 */
  currency: Currency;
  /** 결제 요청 금액 */
  total: number;
  /** 면세금액 */
  tax_free: number;
  /** 부가세 */
  vat?: number;
  /** 공급가액 */
  supply?: number;
  /** 할인금액 (카드사 프로모션, 아임포트 프로모션, 적립형 포인트 결제, 쿠폰 할인 등을 포함) */
  discount: number;
  /** 실제 결제 금액 */
  paid: number;
  /** 취소 금액 */
  cancelled: number;
  /** 취소 금액 중 면세 금액 */
  cancelled_tax_free: number;
}

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type Country =
  | 'AF'
  | 'AX'
  | 'AL'
  | 'DZ'
  | 'AS'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AQ'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AW'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BH'
  | 'BS'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BQ'
  | 'BA'
  | 'BW'
  | 'BV'
  | 'BR'
  | 'IO'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'CV'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CX'
  | 'CC'
  | 'CO'
  | 'KM'
  | 'CG'
  | 'CD'
  | 'CK'
  | 'CR'
  | 'CI'
  | 'HR'
  | 'CU'
  | 'CW'
  | 'CY'
  | 'CZ'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'ET'
  | 'FK'
  | 'FO'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GF'
  | 'PF'
  | 'TF'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GI'
  | 'GR'
  | 'GL'
  | 'GD'
  | 'GP'
  | 'GU'
  | 'GT'
  | 'GG'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HM'
  | 'VA'
  | 'HN'
  | 'HK'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IM'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JE'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MK'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MQ'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'FM'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'NC'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NU'
  | 'NF'
  | 'MP'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PW'
  | 'PS'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PN'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'BL'
  | 'SH'
  | 'KN'
  | 'LC'
  | 'MF'
  | 'PM'
  | 'VC'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SX'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'GS'
  | 'SS'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SJ'
  | 'SZ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TW'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TL'
  | 'TG'
  | 'TK'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TC'
  | 'TV'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'US'
  | 'UM'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'VG'
  | 'VI'
  | 'WF'
  | 'EH'
  | 'YE'
  | 'ZM'
  | 'ZW';
export interface SeparatedAddress {
  /** 국가 코드 */
  country?: Country;
  /** 시/도/구 */
  province?: string;
  /** 도시 */
  city?: string;
  /** 일반 주소 */
  address_line_1: string;
  /** 상세 주소 */
  address_line_2: string;
}

export interface Customer {
  /** 구매자 ID */
  id?: string;
  /** 구매자 이름 */
  name?: string;
  /** 구매자 생년 */
  birthYear?: string;
  gender?: Gender;
  /** 구매자 이메일 */
  email?: string;
  /** 구매자 전화번호 */
  phone_number?: string;
  /** 구매자 주소 (한 줄) */
  one_line_address?: string;
  /** 구매자 주소 (단위별) */
  separated_address?: SeparatedAddress;
  /** 구매자 우편번호 */
  zipcode?: string;
}

export interface Origin {
  /** 결제를 요청한 단말의 플랫폼 분류 */
  platform_type: 'PC' | 'MOBILE' | 'API';
  /** 결제근원의 환경 정보 (Http 의 User-Agent header value) */
  user_agent?: string;
  /** 결제근원의 페이지 url */
  url?: string;
  /** 결제근원의 IP 주소 */
  ip_address: string;
}

export type EscrowStatus =
  | 'REGISTERED'
  | 'COMPLETED'
  | 'CONFIRMED'
  | 'AUTO_CONFIRMED'
  | 'REJECTED'
  | 'CANCEL'
  | 'REJECT_CONFIRMED';
export interface EscrowDetail {
  /** 택배사 */
  company: string;
  /** 송장번호 */
  invoice_number: string;
  /** 에스크로 상태 */
  status?: EscrowStatus;
  /** 발송 일시 (배송이 발송되었을 경우 제공) */
  sent_at?: string;
  /** 배송등록 처리 일자 */
  applied_at?: string;
}

export interface Product {
  /** 상품 ID */
  id: string;
  /** 상품명 */
  name: string;
  /** 상품 태그(카테고리) */
  tag?: string;
  /** 상품 코드 */
  code?: string;
  /** 상품 단위가격 */
  amount: number;
  /** 주문 수량 */
  quantity: number;
}

export interface PaymentFailure {
  /** 실패 이유 */
  reason?: string;
  /** PG사 전달 에러 코드 */
  pg_code?: string;
  /** PG사 전달 에러 메세지 */
  pg_message?: string;
}

export type CardBrand =
  | 'LOCAL'
  | 'MASTER'
  | 'UNIONPAY'
  | 'VISA'
  | 'JCB'
  | 'AMEX'
  | 'DINERS';
export type CardType = 'CREDIT' | 'DEBIT' | 'GIFT';
export type CardOwnerType = 'PERSONAL' | 'CORPORATE';
export interface CardDetail {
  /** 발행사 코드 */
  publisher?: string;
  /** 발급사 코드 */
  issuer?: string;
  /** 카드 브랜드 */
  brand?: CardBrand;
  /** 카드 종류 */
  card_type?: CardType;
  /** 카드 소유주 유형 */
  card_owner_type?: CardOwnerType;
  /** 카드 빈넘버 */
  bin?: string;
  /** 카드전표인자명 */
  name?: string;
}

export interface Installment {
  /** 할부 개월 수 */
  month: number;
  /** 무이자할부 여부 */
  is_interest_free: boolean;
}

export interface Card {
  /** 카드 정보 */
  detail?: CardDetail;
  /** 마스킹된 카드 번호 */
  number?: string;
  /** 승인 번호 */
  approval_number?: string;
  /** 할부 정보 */
  installment?: Installment;
  /** 카드 포인트 사용여부 */
  card_point_used?: boolean;
}

export interface Transfer {
  /** 표준 은행 코드 */
  bank_code?: string;
}

export type VirtualAccountType = 'FIXED' | 'NORMAL';
export type RefundStatus =
  | 'PENDING'
  | 'PARTIAL_FAILED'
  | 'FAILED'
  | 'COMPLETED';
export interface VirtualAccount {
  /** 표준 은행 코드 */
  bank_code?: string;
  /** 계좌번호 */
  account_number: string;
  /** 계좌 유형 */
  account_type?: VirtualAccountType;
  /** 계좌주 */
  remittee_name?: string;
  /** 송금인 (입금자) */
  remitter_name?: string;
  /** 입금만료시점 */
  expired_at?: string;
  /** 계좌발급시점 */
  issued_at?: string;
  /** 가상계좌 결제가 환불 단계일 때의 환불 상태 */
  refund_status?: RefundStatus;
}

export interface RefundAccount {
  /** 은행 */
  bank: string;
  /** 예금주 */
  account_holder: string;
  /** 계좌번호 */
  account_number: string;
  /** 예금주 연락처 - 스마트로 가상계좌 결제인 경우에 필요합니다. */
  phone_number?: string;
}

export type Carrier = 'SKT' | 'KT' | 'LGU' | 'HELLO' | 'KCT' | 'SK7';
export interface Mobile {
  /** 통신사 */
  carrier?: Carrier;
  /** 휴대전화번호 */
  phone_number?: string;
}

export type GiftCertificateType =
  | 'BOOKNLIFE'
  | 'SMART_MUNSANG'
  | 'CULTURELAND'
  | 'HAPPYMONEY';
export interface GiftCertificate {
  type?: GiftCertificateType;
  /** 상품권 승인번호 */
  approval_number: string;
}

export type EasyPayProvider =
  | 'PAYCO'
  | 'SAMSUNGPAY'
  | 'SSGPAY'
  | 'KAKAOPAY'
  | 'NAVERPAY'
  | 'CHAI'
  | 'LPAY'
  | 'KPAY'
  | 'TOSSPAY'
  | 'LGPAY'
  | 'PINPAY'
  | 'APPLEPAY';
export interface Charge {
  /** 표준 은행 코드 (계좌 이체시 입력됨) */
  bank_code?: string;
}
export interface EasyPay {
  /** 간편결제 PG사 */
  easy_pay_provider: EasyPayProvider;
  /** 카드 결제 정보 */
  card?: Card;
  /** 충전/계좌이체 결제 정보 */
  charge?: Charge;
}

export interface PaymentMethodDetail {
  /** 카드 결제 정보 */
  card?: Card;
  /** 계좌이체 정보 */
  transfer?: Transfer;
  /** 가상계좌 결제 정보 */
  virtual_account?: VirtualAccount;
  /** 모바일결제 정보 */
  mobile?: Mobile;
  /** 상품권 결제 정보 */
  gift_certificate?: GiftCertificate;
  /** 간편결제 정보 (충전식 간편결제일 경우 card와 transfer 값이 null임) */
  easy_pay?: EasyPay;
}

export type CashReceiptType = 'PERSONAL' | 'CORPORATE' | 'ANONYMOUS';
export type CashReceiptStatus = 'ISSUED' | 'CANCELLED';
export interface CashReceiptDetail {
  /** PG사 현금영수증 발급 ID */
  pg_receipt_id?: string;
  /** 현금영수증 승인번호 */
  issue_number: string;
  type?: CashReceiptType;
  /** 금액 */
  amount: number;
  /** 면세금액 */
  tax_free_amount?: number;
  status?: CashReceiptStatus;
  /** 발급일시 */
  issued_at: string;
  /** 취소일시 (status가 CANCELLED인 경우 제공) */
  cancelled_at?: string;
  /** 영수증 url */
  receipt_url?: string;
}

export type CancellationStatus = 'REQUESTED' | 'FAILED' | 'SUCCEEDED';
export interface Cancellation {
  /** 취소 ID */
  id: string;
  /** PG사 취소 ID */
  pg_cancellation_id: string;
  /** 취소 금액 */
  cancel_amount: number;
  /** 취소 면세 금액 */
  tax_free_amount: number;
  /** 적립형 포인트의 환불 금액 */
  easy_pay_discount_amount?: number;
  /** 취소 사유 */
  reason: string;
  /** 취소일시 */
  cancelled_at?: string;
  /** 취소요청일시 */
  requested_at: string;
  /** 취소 상태 */
  status: CancellationStatus;
}

export interface Transactions {
  /** 포트원 채번 거래번호 */
  id: string;
  /** 대표 트랜잭션 여부 */
  is_primary: boolean;
  /** 포트원 내부 결제시스템 버전 */
  version: Version;
  /** 결제수단 목록 */
  method?: PaymentMethod;
  /** 결제 채널 정보 */
  channel?: Channel;
  /** 예약결제 ID - 예약결제에만 해당됩니다. */
  schedule_id?: string;
  /** 결제를 발생시킨 빌링키 - 빌링키결제에만 해당됩니다. */
  billing_key?: string;
  /** 웹훅 발송 내역 */
  notifications?: Notification[];
  /** 상태변경시각 */
  status_updated_at?: string;
  /** 수정 시각 */
  updated_at: string;
  /** 주문명 */
  order_name: string;
  /** 결제 건의 상태를 나타내는 enum string */
  status: TransactionStatus;
  /** 결제 금액 및 통화 관련 세부 정보 */
  amount: TransactionAmount;
  /** 구매자 정보 */
  customer: Customer;
  /** 결제를 요청한 근원에 대한 정보 */
  origin: Origin;
  /** 문화비 지출 여부 */
  is_cultural_expense?: boolean;
  /** 에스크로 여부 */
  is_escrow: boolean;
  /** 에스크로 결제 정보 */
  escrow_detail?: EscrowDetail;
  /** 상품 정보 - 에스크로 결제 시 에스크로 상품 정보로 활용됩니다. */
  products?: Product[];
  /** 가맹점의 결제 데이터 추가 정보 */
  custom_data?: string;
  /** 결제요청시각 */
  requested_at: string;
  /** 포트원 프로모션 아이디 */
  promotion_id?: string;
  /** 결제 실패 정보 */
  failure?: PaymentFailure;
  /** 결제실패시각 - status가 FAILED인 경우 제공됩니다. */
  failed_at?: string;
  /** 국가 코드 */
  country?: Country;
  /** 결제완료시각 - status가 COMPLETED로 되었을 경우 제공됩니다. */
  paid_at?: string;
  /** 결제 수단 정보 */
  payment_method_detail?: PaymentMethodDetail;
  /** PG사 거래ID - status가 COMPLETED로 되었을 경우 제공됩니다. */
  pg_tx_id?: string;
  /** PG사 거래 응답 본문 - status가 COMPLETED로 되었을 경우 제공됩니다. */
  pg_response?: string;
  /** 현금영수증 정보 */
  cash_receipt?: CashReceiptDetail;
  /** 취소내역 - status가 CANCELLED인 경우 제공됩니다. */
  cancellations?: Cancellation[];
  /** 결제취소시각 - status가 CANCELLED인 경우 제공됩니다. */
  cancelled_at?: string;
}

export interface Payment {
  /** 가맹점에서 입력한 결제 ID */
  id: string;
  merchant_id: string;
  store_id: string;
  transactions: Transactions[];
}
