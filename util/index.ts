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

export const getPathSegment = (pathname: string, index: number): string => {
  return pathname.split('/').filter((path) => !!path)[index] || '';
};
