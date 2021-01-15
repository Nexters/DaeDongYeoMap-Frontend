import React from 'react';
import * as $ from './AreaFormView';

const AreaForm: React.FC = () => {
  const handleClickSubmit = (e) => {
    e.preventDefault();
    // submit 로직
  };

  return (
    <$.AreaForm>
      <$.SubmitButton onClick={handleClickSubmit}>완료하기</$.SubmitButton>
    </$.AreaForm>
  );
};

export default AreaForm;
