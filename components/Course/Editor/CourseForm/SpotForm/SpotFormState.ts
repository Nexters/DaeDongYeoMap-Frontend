import { makeVar, ReactiveVar } from '@apollo/client';
import { useMemo } from 'react';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';
import IdGenerator from '~/util/IdGenerator';
import type { StateSetter } from '~/util/createReactiveVarHooks';

export enum CardType {
  Spot = 'Spot',
  Line = 'Line',
  Placeholder = 'Placeholder',
  AddButton = 'AddButton',
  FlexLayout = 'FlexLayout',
}

// TODO: Spot Type
export type MockSpot = {
  id: string;
  stickerId?: string;
  title?: string;
  partner?: string;
  timestamp?: number;
};

export type TableItem = {
  type: CardType;
  order?: number;
  data?: MockSpot;
};

export type SpotTable = Array<Array<TableItem>>;

type PlaceholderAdder = () => void;

type SpotOptionLayerOpener = StateSetter<string>;

type SpotOptionLayerCloser = (spotId: string) => void;

export type SpotFormHook = [
  [SpotTable, string],
  [PlaceholderAdder, SpotOptionLayerOpener, SpotOptionLayerCloser]
];

const placholderIdGenerator = IdGenerator.create(
  (index: number) => `ph_${index}`
);

const createPlacholderData = (): MockSpot => ({
  id: placholderIdGenerator.get(),
});

const checkPlaceholder = (spot: MockSpot) => {
  return spot.id[0] === 'p' && spot.id[1] === 'h' && spot.id[2] === '_';
};

// 열 개수
const COLUMN_COUNT = 3;
// 실제 DOM의 열 개수
const LAYOUT_COLUMN_COUNT = COLUMN_COUNT * 2 - 1;

const mapToSpotTable = (spots: MockSpot[]): SpotTable => {
  const spotTable: SpotTable = [[]];
  let order = 0;

  const getSpotItem = (spot: MockSpot): TableItem => {
    order++;

    return {
      type: checkPlaceholder(spot) ? CardType.Placeholder : CardType.Spot,
      order,
      data: spot,
    };
  };

  for (let i = 0; i < spots.length; ++i) {
    const remainer: number = i % COLUMN_COUNT;
    const row: Array<TableItem> = spotTable[spotTable.length - 1];

    if (remainer === 0) {
      row[0] = getSpotItem(spots[i]);
    } else if (remainer > 0 && remainer < COLUMN_COUNT - 1) {
      row[1] = { type: CardType.Line };
      row[2] = getSpotItem(spots[i]);
    } else if (remainer === COLUMN_COUNT - 1) {
      row[3] = { type: CardType.Line };
      row[4] = getSpotItem(spots[i]);
      if (spots[i + 1] !== undefined) {
        spotTable.push([]);
      }
    }
  }

  let lastRow: Array<TableItem> = spotTable[spotTable.length - 1];

  // 스팟 추가버튼 추가
  if (spotTable[spotTable.length - 1].length >= LAYOUT_COLUMN_COUNT) {
    spotTable.push([]);
    lastRow = spotTable[spotTable.length - 1];
    lastRow.push({ type: CardType.AddButton });
  } else {
    lastRow.push({ type: CardType.Line });
    lastRow.push({ type: CardType.AddButton });
  }

  // DOM Layout을 위한 더미 아이템 추가
  const columnCountOfLastRow = spotTable[spotTable.length - 1].length;

  if (columnCountOfLastRow > 0 && columnCountOfLastRow < LAYOUT_COLUMN_COUNT) {
    lastRow.push({ type: CardType.FlexLayout });
  }

  return spotTable;
};

export const spotItems: ReactiveVar<MockSpot[]> = makeVar<Array<MockSpot>>(
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

export const pressedSpot: ReactiveVar<string> = makeVar<string>(null);

const [_, __, usePressedSpot] = createReactiveVarHooks(pressedSpot);

export const [
  useSpotItemsValue,
  useSpotItemsSetter,
  useSpotItems,
] = createReactiveVarHooks(spotItems);

export const useSpotTable = (): SpotTable => {
  const spots: MockSpot[] = useSpotItemsValue();
  const spotTable: SpotTable = mapToSpotTable(spots);

  return spotTable;
};

export const useSpotFormHook = (): SpotFormHook => {
  const [spots, setSpotItems] = useSpotItems();
  const [pressedSpot, setPressedSpot] = usePressedSpot();

  const spotTable: SpotTable = useMemo(() => mapToSpotTable(spots), [spots]);

  const addPlaceholder = () =>
    setSpotItems([...spotItems(), createPlacholderData()]);
  const closeSpotOptionLayer = (spotId: string) => {
    const filteredSpots: MockSpot[] = [];

    for (let i = 0; i < spots.length; ++i) {
      if (spots[i].id !== spotId) {
        filteredSpots.push(spots[i]);
      }
    }

    setPressedSpot(null);
    setSpotItems(filteredSpots);
  };

  return [
    [spotTable, pressedSpot],
    [addPlaceholder, setPressedSpot, closeSpotOptionLayer],
  ];
};
