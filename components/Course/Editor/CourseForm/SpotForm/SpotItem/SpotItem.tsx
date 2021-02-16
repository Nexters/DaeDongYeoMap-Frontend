import React from 'react';
import { SpotTableItem, SpotTableItemType } from '../SpotFormState';
import AddSpotButton from './AddSpotButton';
import SpotCard from './SpotCard';
import SpotPlaceholder from './SpotPlaceholder';
import * as $ from './SpotItemView';

export type Props = {
  item: SpotTableItem;
  rowIndex: number;
  columnIndex: number;
};

const SpotItem: React.FC<Props> = ({ item, rowIndex, columnIndex }) => {
  switch (item.type) {
    case SpotTableItemType.Spot:
      return (
        <SpotCard item={item} rowIndex={rowIndex} columnIndex={columnIndex} />
      );
    case SpotTableItemType.Line:
      return (
        <$.SpotItem flexable={true}>
          <$.LineColumn />
        </$.SpotItem>
      );
    case SpotTableItemType.Placeholder:
      return (
        <SpotPlaceholder
          item={item}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
        />
      );
    case SpotTableItemType.AddButton:
      return (
        <AddSpotButton
          item={item}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
        />
      );
    case SpotTableItemType.FlexLayout:
      return <$.SpotDummyItem />;
    default:
      return null;
  }
};

export default SpotItem;
