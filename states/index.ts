import { atom, selector } from 'recoil';

export const messageState = atom({
  key: 'messageState',
  default: '',
});

export const decoratedMessageState = selector({
  key: 'decoratedMessageState',
  get: ({ get }) => {
    const message = get(messageState);

    return message ? `${message} !!!` : '메세지가 없어요...';
  },
});
