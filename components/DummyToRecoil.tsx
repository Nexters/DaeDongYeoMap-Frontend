import React, { useEffect } from 'react';
import { gql } from '@apollo/client';
import client from '~/lib/apollo/client';
import createLazyQuery from '~/lib/recoil/factories/createLazyQuery';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import browserOnly from '~/components/_common/hoc/browserOnly';

/**
 * @description
 * 원래는 DummyToRecoilState.tsx 파일에 있어야 하는 부분
 * 테스트를 위해 하나의 파일에서 작성
 */
const GET_SPOTS = gql`
  query GetSpots {
    getAllSpots {
      id
    }
  }
`;

const { queryVariables, queryResult } = createLazyQuery<string[], null>(
  {
    key: 'DummyToRecoil',
  },
  async () => {
    const response = await client.query({
      query: GET_SPOTS,
    });

    return response?.data?.getAllSpots;
  }
);

/**
 * @description
 * query를 요청하는 컴포넌트 (즉, 쿼리 결과를 변화시키는 컴포넌트)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DummyToRecoilRequest: React.FC = () => {
  const request = useSetRecoilState(queryVariables);

  useEffect(() => {
    request(null);
  }, []);

  return <></>;
};

/**
 * @description
 * query 결과를 받는 컴포넌트
 */
const DummyToRecoilResult: React.FC = () => {
  const result = useRecoilValue(queryResult);

  console.log('<===== DummyToRecoil 응답값 =====>');
  console.log(result);

  return <></>;
};

/**
 * @description
 * (이부분 조금 더 리서치 해봐야하는 부분이긴 한데)
 * recoil이 Suspense intergration 에 적합하도록 개발되어 있는듯 함.
 * 그래서 항상, React.Suspense가 필요할듯
 */
const DummyToRecoil: React.FC = () => {
  return (
    <>
      {/* 지금은 variables가 필요없어서, DummyToRecoilRequests가 없어도 됨 */}
      <React.Suspense fallback={<></>}>
        <DummyToRecoilResult />
      </React.Suspense>
    </>
  );
};

/**
 * TODO: recoil 상태 hydration 처리에 대해 알아봐야함.
 * 일단은 CSR만 가능한듯
 */
export default browserOnly(DummyToRecoil);
