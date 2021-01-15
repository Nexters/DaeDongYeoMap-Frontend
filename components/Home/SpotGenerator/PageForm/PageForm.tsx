import React from 'react';
import { useRecoilState } from 'recoil';
import { pageState } from '../SpotGeneratorState';
import * as $ from './PageFormView';

const PageForm: React.FC = () => {
  const [_, setPage] = useRecoilState(pageState);

  const handleClickCompleteButton = () => setPage(1);

  return (
    <$.PageForm>
      <$.AreaForm></$.AreaForm>
      <$.AreaButton>
        <$.CompleteButton onClick={handleClickCompleteButton}>
          완료하기
        </$.CompleteButton>
      </$.AreaButton>
    </$.PageForm>
  );
};

export default PageForm;
