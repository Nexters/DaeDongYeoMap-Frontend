export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

export const toDigit = (num: number, len: number): string => {
  let digit: string = num.toString();

  while (digit.length < len) {
    digit = '0' + digit;
  }

  return digit;
};
