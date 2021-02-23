import { makeVar, ReactiveVar } from '@apollo/client';
import { useEffect, useMemo } from 'react';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';
import { CLASSNAME_COURSE_EDITOR_SPOT } from '~/constants/dom';
import {
  checkPlaceholder,
  createPlacholderData,
  usePressedSpotSetter,
} from './SpotItem/SpotItemState';
import { useFormSpotsSetter } from '../CourseFormState';
import type { StickerCardRecord } from '~/@types/record.d';

export enum SpotTableItemType {
  Spot = 'Spot',
  Line = 'Line',
  Placeholder = 'Placeholder',
  AddButton = 'AddButton',
  FlexLayout = 'FlexLayout',
}
export type SpotTableItem = {
  type: SpotTableItemType;
  itemIndex?: number;
  order?: number;
  data?: StickerCardRecord;
};
export type SpotTable = Array<Array<SpotTableItem>>;
export type SpotFormHook = {
  spotTable: SpotTable;
};

// 열 개수
const COLUMN_COUNT = 3;
// 실제 DOM의 열 개수
const LAYOUT_COLUMN_COUNT = COLUMN_COUNT * 2 - 1;

const mapToSpotTable = (spots: StickerCardRecord[]): SpotTable => {
  const spotTable: SpotTable = [[]];
  let order = 0;

  const getSpotItem = (index: number): SpotTableItem => {
    order++;

    return {
      type: checkPlaceholder(spots[index])
        ? SpotTableItemType.Placeholder
        : SpotTableItemType.Spot,
      itemIndex: index,
      order,
      data: spots[index],
    };
  };

  for (let i = 0; i < spots.length; ++i) {
    const remainer: number = i % COLUMN_COUNT;
    const row: Array<SpotTableItem> = spotTable[spotTable.length - 1];

    if (remainer === 0) {
      row[0] = getSpotItem(i);
    } else if (remainer > 0 && remainer < COLUMN_COUNT - 1) {
      row[1] = { type: SpotTableItemType.Line };
      row[2] = getSpotItem(i);
    } else if (remainer === COLUMN_COUNT - 1) {
      row[3] = { type: SpotTableItemType.Line };
      row[4] = getSpotItem(i);
      if (spots[i + 1] !== undefined) {
        spotTable.push([]);
      }
    }
  }

  let lastRow: Array<SpotTableItem> = spotTable[spotTable.length - 1];

  // 스팟 추가버튼 추가
  if (lastRow.length >= LAYOUT_COLUMN_COUNT) {
    spotTable.push([]);
    lastRow = spotTable[spotTable.length - 1];
    lastRow.push({ type: SpotTableItemType.AddButton });
  } else if (lastRow.length === 0) {
    lastRow.push({ type: SpotTableItemType.AddButton });
  } else {
    lastRow.push({ type: SpotTableItemType.Line });
    lastRow.push({ type: SpotTableItemType.AddButton });
  }

  // DOM Layout을 위한 더미 아이템 추가
  if (lastRow.length > 0 && lastRow.length < LAYOUT_COLUMN_COUNT) {
    lastRow.push({ type: SpotTableItemType.FlexLayout });
  }

  return spotTable;
};

export const spotItems: ReactiveVar<StickerCardRecord[]> = makeVar<
  StickerCardRecord[]
>([createPlacholderData()]);

export const [
  useSpotItemsValue,
  useSpotItemsSetter,
  useSpotItems,
] = createReactiveVarHooks(spotItems);

export const useSpotFormHook = (): SpotFormHook => {
  const setFormSpots = useFormSpotsSetter();
  const spots = useSpotItemsValue();
  const setPressedSpotId = usePressedSpotSetter();
  const spotTable: SpotTable = useMemo(() => mapToSpotTable(spots), [spots]);

  const handleClickDocument = (e: MouseEvent): void => {
    const elTarget: HTMLElement = e.target as HTMLElement;
    const elCard: HTMLElement = elTarget.closest(
      `.${CLASSNAME_COURSE_EDITOR_SPOT}`
    );

    if (!elCard) {
      setPressedSpotId(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickDocument);

    return () => document.removeEventListener('click', handleClickDocument);
  }, []);

  useEffect(() => {
    setFormSpots(spots);
  }, [spots]);

  return {
    spotTable,
  };
};

export const useSpotFormResetter = (): (() => void) => {
  const setSpotItems = useSpotItemsSetter();

  return () => {
    setSpotItems([createPlacholderData()]);
  };
};
