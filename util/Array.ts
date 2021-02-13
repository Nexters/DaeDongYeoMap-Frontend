export function findIndex<Item = any>(
  array: Array<Item>,
  predicate: (item: Item, i: number) => boolean
): number {
  let index = -1;

  for (let i = 0; i < array.length; ++i) {
    if (predicate(array[i], i)) {
      index = i;
      break;
    }
  }

  return index;
}
