import React from 'react';
import * as $ from './AreaFilterView';

const AreaFilter: React.FC = () => {
  const handleClickSugar = (e) => {
    e.preventDefault();
    // TODO: 당도 필터링 기능
  };

  return (
    <$.AreaFilter>
      <$.SugarList>
        <$.SugarItem>
          <$.SugarButton color="sugar0" onClick={handleClickSugar}>
            당도 0%
          </$.SugarButton>
        </$.SugarItem>
        <$.SugarItem>
          <$.SugarButton color="sugar30" onClick={handleClickSugar}>
            30%
          </$.SugarButton>
        </$.SugarItem>
        <$.SugarItem>
          <$.SugarButton color="sugar50" onClick={handleClickSugar}>
            50%
          </$.SugarButton>
        </$.SugarItem>
        <$.SugarItem>
          <$.SugarButton color="sugar70" onClick={handleClickSugar}>
            70%
          </$.SugarButton>
        </$.SugarItem>
        <$.SugarItem>
          <$.SugarButton color="sugar100" onClick={handleClickSugar}>
            100%
          </$.SugarButton>
        </$.SugarItem>
      </$.SugarList>
    </$.AreaFilter>
  );
};

export default AreaFilter;
