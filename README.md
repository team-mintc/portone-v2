![MintC Logo](https://user-images.githubusercontent.com/5517346/236246009-1621709d-3182-4462-a060-dcf417361294.png)

# PortOne

## 설치

npm 사용
```
npm i @team-mintc/portone-v2
```

yarn사용
```
yarn add @team-mintc/portone-v2
```

## Usage

### 결제 요청

pages/index.tsx
```typescript
import {PortOne} from '@team-mintc/portone-v2';

// ...

PortOne.requestPayment({
  // 가맹점 storeId로 변경해주세요.
  storeId,
  isTestChannel: true,
  redirectUrl: 'http://192.168.50.27:3000/payment/redirect',
  orderName: productName,
  totalAmount: amount,
  pgProvider: 'PG_PROVIDER_TOSSPAYMENTS',
  payMethod: 'CARD',
  paymentId,
  taxFreeAmount,
  customer: {
    customerId: 'customerId_now',
    fullName: '신현성',
    phoneNumber: '1670-5176',
    email: 'test@portone.io',
    zipcode: '04783',
  },
  windowType: {
    pc: 'IFRAME',
    mobile: 'REDIRECTION',
  },
  noticeUrls: ['http://192.168.50.27:3000/api/payment/hook'],
  confirmUrl: 'http://192.168.50.27:3000/payment/confirm',
  appScheme: 'portone://',
  isCulturalExpense: false,
  currency: 'CURRENCY_KRW',
  locale: 'KO_KR',
});
```

### 결제 검증
api/complete.ts
```typescript
import {initializePortOneAPI} from '@team-mintc/portone-v2';

// ...

try {
  // 요청의 body로 SDK의 응답 중 txId와 paymentId가 오기를 기대합니다.
  const {txId, paymentId} = req.body;

  // 1. PortOne API Key를 통해 AccessToken을 가져옵니다.
  const portOneAPI = await initializePortOneAPI(
    process.env.PORTONE_API_KEY || '', // 포트원 API Key
  );

  // 2. 포트원 결제내역 단건조회 API 호출
  const paymentResponse = await portOneAPI.getPaymentDetails({
    payment_id: paymentId,
  });
  const {payment} = paymentResponse;
  const {id, transactions} = payment;

  // 대표 트랜잭션(승인된 트랜잭션)을 선택합니다.
  const transaction = transactions.find((tx: any) => tx.is_primary === true);
  if (!transaction) throw 'no transaction';

  // 3. 가맹점 내부 주문 데이터의 가격과 실제 지불된 금액을 비교합니다.
  const order = await FakeORM.OrderService.findById(id);
  if (order && order.amount === transaction.amount.total) {
    switch (transaction.status) {
      case 'VIRTUAL_ACCOUNT_ISSUED': {
        // const {virtual_account} = transaction.payment_method_detail;
        // 가상 계좌가 발급된 상태입니다.
        // 계좌 정보(virtual_account)를 이용해 원하는 로직을 구성하세요.
        console.log('가상 계좌');
        break;
      }
      case 'PAID': {
        // 모든 금액을 지불했습니다! 완료 시 원하는 로직을 구성하세요.
        console.log('paid');
        break;
      }
    }
    res.status(200).send('ok');
  } else {
    // 결제 금액이 불일치하여 위/변조 시도가 의심됩니다.
    res.status(400).send('warning: diff');
  }
} catch (e: any) {
  // 결제 검증에 실패했습니다.
  console.error('fail', e.message, e.response.data);
  res.status(400).send(e);
}

// ...
```


## 문서
https://portone.gitbook.io/docs/api-v2/v2-api

getPaymentDetails: [결제내역 단건조회](https://portone.gitbook.io/docs/api-v2/payment#undefined-1)

getPaymentsDetails: [결제내역 다건조회](https://portone.gitbook.io/docs/api-v2/payment#undefined-8)

cancelPayment: [결제 취소](https://portone.gitbook.io/docs/api-v2/payment#undefined-22)

resendWebhook: [웹훅 재발송](https://portone.gitbook.io/docs/api-v2/payment#undefined-32)

noticeVirtualAccountDeposit: [가상계좌 테스트 웹훅 호출](https://portone.gitbook.io/docs/api-v2/payment#undefined-40)

schedulesPayment: [결제 예약](https://portone.gitbook.io/docs/api-v2/payment#undefined-49)

payBillingKey: [빌링키 결제](https://portone.gitbook.io/docs/api-v2/payment#undefined-59)

payInstant: [키인(수기) 결제](https://portone.gitbook.io/docs/api-v2/payment#undefined-69)

escrowLogis: [에스크로 배송정보 등록/변경](https://portone.gitbook.io/docs/api-v2/payment#undefined-81)

escrowComplete: [에스크로 구매완료](https://portone.gitbook.io/docs/api-v2/payment#undefined-91)

getSchedules: [정기결제예약 다건 조회](https://portone.gitbook.io/docs/api-v2/schedule#undefined)

cancelSchedules: [빌링키 정기결제예약 취소](https://portone.gitbook.io/docs/api-v2/schedule#undefined-5)

getSchedule: [정기결제예약 단건 조회](https://portone.gitbook.io/docs/api-v2/schedule#undefined-11)

getChannels: [채널 불러오기](https://portone.gitbook.io/docs/api-v2/channel#undefined)

getCashReceipt: [현금영수증 조회](https://portone.gitbook.io/docs/api-v2/cash_receipt#undefined)

issueCashReceipt: [현금영수증 발급](https://portone.gitbook.io/docs/api-v2/cash_receipt#undefined-6)

cancelCashReceipt: [현금영수증 발급 취소](https://portone.gitbook.io/docs/api-v2/cash_receipt#undefined-15)

getBillingKeys: [빌링키 다건 조회](https://portone.gitbook.io/docs/api-v2/billing_key#undefined-1)

issueBillingKey: [빌링키 발급](https://portone.gitbook.io/docs/api-v2/billing_key#undefined-7)

getBillingKey: [빌링키 단건 조회](https://portone.gitbook.io/docs/api-v2/billing_key#undefined-18)

deleteBillingKey: [빌링키 취소](https://portone.gitbook.io/docs/api-v2/billing_key#undefined-25)

getStores: [하위상점 다건 조회](https://portone.gitbook.io/docs/api-v2/store#undefined-1)

createStore: [하위상점 생성](https://portone.gitbook.io/docs/api-v2/store#undefined-8)

getStore: [하위상점 단건 조회](https://portone.gitbook.io/docs/api-v2/store#undefined-17)

updateStore: [하위상점 수정](https://portone.gitbook.io/docs/api-v2/store#undefined-25)

getStoreApplication: [하위상점의 전자결제 신청 정보를 가져오기 (호스팅사 > 포트원)](https://portone.gitbook.io/docs/api-v2/applications#greater-than-1)

requestApplications: [온보딩 API 를 통해 전자결제 신청하기 (호스팅사 > 포트원 > 결제대행사)](https://portone.gitbook.io/docs/api-v2/applications#api-greater-than-greater-than-1)

getTossPaymentsStatusAndUrl: [가입 신청 URL 호출 & 상태값 조회하기](https://portone.gitbook.io/docs/api-v2/applications#url-and-1)

## 예제 코드

[https://github.com/team-mintc/example-payments](https://github.com/team-mintc/example-payments)
