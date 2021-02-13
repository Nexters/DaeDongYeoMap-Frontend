import { makeVar, ReactiveVar } from '@apollo/client';
import { useEffect, useMemo } from 'react';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';
import { CLASSNAME_COURSE_EDITOR_SPOT } from '~/constants/dom';
import {
  checkPlaceholder,
  usePressedSpotSetter,
  createPlacholderData,
} from './SpotItem/SpotItemState';
import type { SpotView } from '~/components/Course/Editor/EditorState';

export enum SpotTableItemType {
  Spot = 'Spot',
  Line = 'Line',
  Placeholder = 'Placeholder',
  AddButton = 'AddButton',
  FlexLayout = 'FlexLayout',
}
export type SpotTableItem = {
  type: SpotTableItemType;
  order?: number;
  data?: SpotView;
};
export type SpotTable = Array<Array<SpotTableItem>>;
export type SpotFormHook = {
  spotTable: SpotTable;
};

// 열 개수
const COLUMN_COUNT = 3;
// 실제 DOM의 열 개수
const LAYOUT_COLUMN_COUNT = COLUMN_COUNT * 2 - 1;

const mapToSpotTable = (spots: SpotView[]): SpotTable => {
  const spotTable: SpotTable = [[]];
  let order = 0;

  const getSpotItem = (spot: SpotView): SpotTableItem => {
    order++;

    return {
      type: checkPlaceholder(spot)
        ? SpotTableItemType.Placeholder
        : SpotTableItemType.Spot,
      order,
      data: spot,
    };
  };

  for (let i = 0; i < spots.length; ++i) {
    const remainer: number = i % COLUMN_COUNT;
    const row: Array<SpotTableItem> = spotTable[spotTable.length - 1];

    if (remainer === 0) {
      row[0] = getSpotItem(spots[i]);
    } else if (remainer > 0 && remainer < COLUMN_COUNT - 1) {
      row[1] = { type: SpotTableItemType.Line };
      row[2] = getSpotItem(spots[i]);
    } else if (remainer === COLUMN_COUNT - 1) {
      row[3] = { type: SpotTableItemType.Line };
      row[4] = getSpotItem(spots[i]);
      if (spots[i + 1] !== undefined) {
        spotTable.push([]);
      }
    }
  }

  let lastRow: Array<SpotTableItem> = spotTable[spotTable.length - 1];

  // 스팟 추가버튼 추가
  if (spotTable[spotTable.length - 1].length >= LAYOUT_COLUMN_COUNT) {
    spotTable.push([]);
    lastRow = spotTable[spotTable.length - 1];
    lastRow.push({ type: SpotTableItemType.AddButton });
  } else {
    lastRow.push({ type: SpotTableItemType.Line });
    lastRow.push({ type: SpotTableItemType.AddButton });
  }

  // DOM Layout을 위한 더미 아이템 추가
  const columnCountOfLastRow = spotTable[spotTable.length - 1].length;

  if (columnCountOfLastRow > 0 && columnCountOfLastRow < LAYOUT_COLUMN_COUNT) {
    lastRow.push({ type: SpotTableItemType.FlexLayout });
  }

  return spotTable;
};

export const spotItems: ReactiveVar<SpotView[]> = makeVar<Array<SpotView>>(
  [1, 2, null, 5].map((dummy, i) =>
    dummy === null
      ? createPlacholderData()
      : {
          id: `spot${i}`,
          stickerId: 'sticker0',
          title: '애버랜드',
          partner: '남자친구',
          timestamp: 1609513200,
        }
  )
);

export const [
  useSpotItemsValue,
  useSpotItemsSetter,
  useSpotItems,
] = createReactiveVarHooks(spotItems);

export const useSpotFormHook = (): SpotFormHook => {
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
  });

  return {
    spotTable,
  };
};
