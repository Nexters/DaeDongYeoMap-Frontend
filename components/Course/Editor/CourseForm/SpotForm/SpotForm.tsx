import React, { useEffect } from 'react';
import SpotPlaceholder from './SpotPlaceholder';
import AddSpotButton from './AddSpotButton';
import SpotCard from './SpotCard';
import SpotOptionLayer from './SpotOptionLayer';
import { useSpotFormHook, CardType } from './SpotFormState';
import * as $ from './SpotFormView';
import type { SpotFormHook, TableItem } from './SpotFormState';
import { CLASSNAME_COURSE_EDITOR_SPOT } from '~/constants/dom';

const SpotItem: React.FC<{
  item: TableItem;
  columnIndex: number;
  hook: SpotFormHook;
}> = ({ item: { type, data, order }, columnIndex, hook }) => {
  const [
    [_, pressedSpotId],
    [addPlaceholder, openSpotOptionLayer, closeSpotOptionLayer],
  ] = hook;

  switch (type) {
    case CardType.Spot:
      return (
        <$.SpotItem>
          <$.SpotOrder>{order}</$.SpotOrder>
          <$.SpotCard>
            <SpotCard
              isPressed={pressedSpotId === data.id}
              stickerId={data.stickerId}
              title={data.title}
              partner={data.partner}
              timestamp={data.timestamp}
              onContextMenu={() => {
                openSpotOptionLayer(data.id);
              }}
            />
          </$.SpotCard>
          {pressedSpotId === data.id && (
            <SpotOptionLayer
              onClickDeleteButton={() => {
                closeSpotOptionLayer(data.id);
              }}
            />
          )}
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
            <SpotPlaceholder
              isPressed={pressedSpotId === data.id}
              onContextMenu={() => {
                openSpotOptionLayer(data.id);
              }}
            />
          </$.SpotCard>
          {pressedSpotId === data.id && (
            <SpotOptionLayer
              onClickDeleteButton={() => {
                closeSpotOptionLayer(data.id);
              }}
            />
          )}
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
  const [[spotTable], [_, __, ___, closeAllSpotOptionLayer]] = hook;
  const handleClickDocument = (e: MouseEvent): void => {
    const elTarget: HTMLElement = e.target as HTMLElement;
    const elCard: HTMLElement = elTarget.closest(
      `.${CLASSNAME_COURSE_EDITOR_SPOT}`
    );

    if (!elCard) {
      closeAllSpotOptionLayer();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickDocument);

    return () => document.removeEventListener('click', handleClickDocument);
  });

  return (
    <$.SpotForm>
      {spotTable.map((row, i) => (
        <React.Fragment key={`row-${i}`}>
          <$.Row>
            {
              row.map((item, j) => (
                <SpotItem
                  key={item?.data?.id || `col-${i}-${j}`}
                  item={item}
                  columnIndex={j}
                  hook={hook}
                />
              )) /* TODO: key ID값으로 변경 */
            }
          </$.Row>
          {spotTable[i + 1] && <$.LineRow />}
        </React.Fragment>
      ))}
    </$.SpotForm>
  );
};

export default SpotForm;
