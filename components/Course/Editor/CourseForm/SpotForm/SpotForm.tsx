import React from 'react';
import { useSpotFormHook } from './SpotFormState';
import SpotItem from './SpotItem';
import * as $ from './SpotFormView';

const SpotForm: React.FC = () => {
  const { spotTable } = useSpotFormHook();

  return (
    <$.SpotForm>
      {spotTable.map((row, i) => (
        <React.Fragment key={`row-${i}`}>
          <$.Row>
            {
              row.map((item, j) => (
                <SpotItem
                  key={
                    item?.data?.id ? `item-${item.data.id}` : `col-${i}-${j}`
                  }
                  item={item}
                  rowIndex={i}
                  columnIndex={j}
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
