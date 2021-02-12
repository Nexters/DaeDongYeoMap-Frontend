import React from 'react';
import SpotPlaceholder from './SpotPlaceholder';
import AddSpotButton from './AddSpotButton';
import SpotCard from '~/components/Course/Editor/_common/SpotCard';
import { mapToSpotTable, CardType } from './SpotFormState';
import * as $ from './SpotFormView';
import type { MockSpot, SpotTable, TableItem } from './SpotFormState';

const mockSpots: MockSpot[] = [1, null, 3, null, 5, null].map((dummy) =>
  dummy === null
    ? null
    : {
        stickerId: 'sticker0',
        title: '애버랜드',
        partner: '남자친구',
        timestamp: 1609513200,
      }
);

const getCard = (
  { type, data, order }: TableItem,
  columnIndex: number
): JSX.Element => {
  switch (type) {
    case CardType.Spot:
      return (
        <$.SpotItem>
          <$.SpotOrder>{order}</$.SpotOrder>
          <$.SpotCard>
            <SpotCard {...data} />
          </$.SpotCard>
        </$.SpotItem>
      );
    case CardType.Line:
      return (
        <$.SpotItem flexable={true}>
          <$.LineColumn />
        </$.SpotItem>
      );
    case CardType.Placeholder:
      return (
        <$.SpotItem>
          <$.SpotOrder>{order}</$.SpotOrder>
          <$.SpotCard>
            <SpotPlaceholder />
          </$.SpotCard>
        </$.SpotItem>
      );
    case CardType.AddButton:
      return (
        <$.SpotItem>
          <AddSpotButton verticalDashedLine={columnIndex % 3 === 0} />
        </$.SpotItem>
      );
    case CardType.FlexLayout:
      return <$.SpotDummyItem />;
    default:
      return null;
  }
};

const SpotForm: React.FC = () => {
  const spotTable: SpotTable = mapToSpotTable(mockSpots);

  return (
    <$.SpotForm>
      {spotTable.map((row, i) => (
        <>
          <$.Row>{row.map((item, j) => getCard(item, j))}</$.Row>
          {spotTable[i + 1] && <$.LineRow />}
        </>
      ))}
    </$.SpotForm>
  );
};

export default SpotForm;
