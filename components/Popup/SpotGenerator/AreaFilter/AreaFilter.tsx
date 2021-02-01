import React from 'react';
import { Sugar } from '~/@types/daedong.d';
import { useFormSugarState } from '~/components/Popup/SpotGenerator/SpotGeneratorState';
import * as $ from './AreaFilterView';

const sugars = [
  { sugar: Sugar.Degree0, label: '당도 0%' },
  { sugar: Sugar.Degree30, label: '30%' },
  { sugar: Sugar.Degree50, label: '50%' },
  { sugar: Sugar.Degree70, label: '70%' },
  { sugar: Sugar.Degree100, label: '100%' },
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
