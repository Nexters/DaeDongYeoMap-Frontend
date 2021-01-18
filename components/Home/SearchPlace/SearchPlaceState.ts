import { atom } from 'recoil';
//atom은 state의 작은 단위를 의미. atom은 어떤 컴포넌트에서든 읽기/쓰기가 가능.
//모든 컴포넌트는 atom에 정의되는 state 값을 가져다 읽을 수 있고, atom이 업데이트되면 컴포넌트도 함께 업데이트된다.
export const searchValueState = atom({
  key: 'searchValueState',
  default: '',
});
