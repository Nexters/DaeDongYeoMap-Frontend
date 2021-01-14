import React from 'react';
import * as $ from './PageFormView';

const PageForm: React.FC = () => {
  return (
    <$.PageForm>
      <$.AreaForm></$.AreaForm>
      <$.AreaButton>
        <$.CompleteButton>완료하기</$.CompleteButton>
      </$.AreaButton>
    </$.PageForm>
  );
};

export default PageForm;
