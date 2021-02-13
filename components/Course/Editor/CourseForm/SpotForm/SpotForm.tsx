import React from 'react';
import SpotPlaceholder from './SpotPlaceholder';
import AddSpotButton from './AddSpotButton';
import SpotCard from '~/components/Course/Editor/_common/SpotCard';
import { useSpotFormHook, CardType } from './SpotFormState';
import * as $ from './SpotFormView';
import type { SpotFormHook, TableItem } from './SpotFormState';

const getCard = (
  { type, data, order }: TableItem,
  columnIndex: number,
  hook: SpotFormHook
): JSX.Element => {
  const [_, addPlaceholder] = hook;

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
          <AddSpotButton
            verticalDashedLine={columnIndex % 3 === 0}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              addPlaceholder();
            }}
          />
        </$.SpotItem>
      );
    case CardType.FlexLayout:
      return <$.SpotDummyItem />;
    default:
      return null;
  }
};

const SpotForm: React.FC = () => {
  const hook = useSpotFormHook();
  const [spotTable] = hook;

  return (
    <$.SpotForm>
      {spotTable.map((row, i) => (
        <>
          <$.Row>{row.map((item, j) => getCard(item, j, hook))}</$.Row>
          {spotTable[i + 1] && <$.LineRow />}
        </>
      ))}
    </$.SpotForm>
  );
};

export default SpotForm;
