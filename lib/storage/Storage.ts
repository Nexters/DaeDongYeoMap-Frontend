import { findIndex } from '~/util/Array';
import type {
  StickerCardRecord,
  PositionRecord,
  CourseCardRecord,
} from '~/@types/record.d';

export enum StorageKey {
  StickerCards = 'service__sticker_cards',
  CourseCards = 'service__courses',
  CurrentPosition = 'service__pos_current',
}

export function makeStorageGetter<StorageRecord>(
  storageKey: StorageKey,
  defaultRecord: StorageRecord
): () => StorageRecord {
  return () => {
    const storedItem: string = localStorage.getItem(storageKey);
    const isStored = typeof storedItem === 'string';

    if (isStored) {
      try {
        return JSON.parse(storedItem);
      } catch (err) {
        return storedItem;
      }
    } else {
      return defaultRecord;
    }
  };
}

export function makeStorageSetter<StorageRecord>(
  storageKey: StorageKey
): (record: StorageRecord) => void {
  return (record: StorageRecord) => {
    const item: string =
      typeof record === 'object' ? JSON.stringify(record) : record.toString();

    localStorage.setItem(storageKey, item);
  };
}

export function makeStorageAdder<StorageRecordItem>(
  storageKey: StorageKey,
  getter: () => Array<StorageRecordItem>,
  predicate: (argItem: StorageRecordItem, item: StorageRecordItem) => boolean
): (recordItem: StorageRecordItem) => Array<StorageRecordItem> {
  return (recordItem: StorageRecordItem) => {
    const records: Array<StorageRecordItem> = getter();
    const existedIndex: number = findIndex<StorageRecordItem>(records, (item) =>
      predicate(recordItem, item)
    );

    if (existedIndex === -1) {
      records.push(recordItem);
      localStorage.setItem(storageKey, JSON.stringify(records));
    }

    return records;
  };
}

export function makeStorageRemover<StorageRecordItem, ItemId>(
  storageKey: StorageKey,
  getter: () => Array<StorageRecordItem>,
  predicate: (argItemId: ItemId, item: StorageRecordItem) => boolean
): (recordItem: ItemId) => Array<StorageRecordItem> {
  return (recordItemId: ItemId) => {
    const records: Array<StorageRecordItem> = getter();
    const existedIndex: number = findIndex<StorageRecordItem>(records, (item) =>
      predicate(recordItemId, item)
    );

    if (existedIndex === -1) {
      records.splice(existedIndex, 1);
      localStorage.setItem(storageKey, JSON.stringify(records));
    }

    return records;
  };
}

const getStickerCards = makeStorageGetter<StickerCardRecord[]>(
  StorageKey.StickerCards,
  []
);

const addStickerCard = makeStorageAdder<StickerCardRecord>(
  StorageKey.StickerCards,
  getStickerCards,
  (argItem, item) => argItem.id === item.id
);

const removeStickerCard = makeStorageRemover<StickerCardRecord, string>(
  StorageKey.StickerCards,
  getStickerCards,
  (argItemId, item) => argItemId === item.id
);

const getCourseCards = makeStorageGetter<CourseCardRecord[]>(
  StorageKey.CourseCards,
  []
);

const addCourseCard = makeStorageAdder<CourseCardRecord>(
  StorageKey.CourseCards,
  getCourseCards,
  (argItem, item) => argItem.id === item.id
);

const removeCourseCard = makeStorageRemover<CourseCardRecord, string>(
  StorageKey.CourseCards,
  getCourseCards,
  (argItemId, item) => argItemId === item.id
);

const getCurrentPosition = makeStorageGetter<PositionRecord>(
  StorageKey.CurrentPosition,
  {
    lngX: 127.0671244,
    latY: 37.2968082,
  }
);

const setCurrentPosition = makeStorageSetter<PositionRecord>(
  StorageKey.CurrentPosition
);

export default class Storage {
  public static getStickerCards = getStickerCards;
  public static addStickerCard = addStickerCard;
  public static removeStickerCard = removeStickerCard;

  public static getCourseCards = getCourseCards;
  public static addCourseCard = addCourseCard;
  public static removeCourseCard = removeCourseCard;

  public static getCurrentPosition = getCurrentPosition;
  public static setCurrentPosition = setCurrentPosition;
}
