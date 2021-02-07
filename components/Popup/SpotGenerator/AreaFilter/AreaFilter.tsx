import React from 'react';
import { useFormSugarState } from '~/components/Popup/SpotGenerator/SpotGeneratorState';
import * as $ from './AreaFilterView';
import type { Sugar } from '~/constants/sugar';

type SugarLabels = {
  sugar: Sugar;
  label: string;
}[];

const sugars: SugarLabels = [
  { sugar: 'sugar0', label: '당도 0%' },
  { sugar: 'sugar30', label: '30%' },
  { sugar: 'sugar50', label: '50%' },
  { sugar: 'sugar70', label: '70%' },
  { sugar: 'sugar100', label: '100%' },
];

const AreaFilter: React.FC = () => {
  const [selectedSugar, setSelectedSugar] = useFormSugarState();

  const handleClickSugar = (e: React.MouseEvent, sugar: Sugar) => {
    e.preventDefault();
    if (selectedSugar !== sugar) {
      setSelectedSugar(sugar);
    }
  };

  return (
    <$.AreaFilter>
      <$.SugarList>
        {sugars.map(({ sugar, label }) => (
          <$.SugarItem key={`sugar-filter-${sugar}`}>
            <$.SugarButton
              sugar={sugar}
              aria-selected={sugar === selectedSugar}
              onClick={(e) => handleClickSugar(e, sugar)}
            >
              {label}
            </$.SugarButton>
          </$.SugarItem>
        ))}
      </$.SugarList>
    </$.AreaFilter>
  );
};

export default AreaFilter;
