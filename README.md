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

## 예제 코드

[https://github.com/team-mintc/example-payments](https://github.com/team-mintc/example-payments)
