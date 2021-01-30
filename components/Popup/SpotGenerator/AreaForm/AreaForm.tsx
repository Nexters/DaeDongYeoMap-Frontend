import React, { useState } from 'react';
import DatePicker from './DatePicker';
import * as $ from './AreaFormView';

const AreaForm: React.FC = () => {
  const [isDatePickerShown, setIsDatePickerShown] = useState(false);

  return (
    <$.AreaForm>
      <$.FieldSet>
        <$.FieldLabel>누구와 함께 방문하셨나요</$.FieldLabel>
        <$.FieldInputBox>
          <$.InputVisitant placeholder="ex) 전남친, 사랑하는 엄마" />
        </$.FieldInputBox>
      </$.FieldSet>
      <$.FieldSet>
        <$.FieldLabel>장소를 방문한 날짜를 기록해보세요</$.FieldLabel>
        <$.FieldInputBox>
          <$.DateLabel isSelected={false}>01.16.2021</$.DateLabel>
          <$.DatePickerOpenButton
            onClick={() => setIsDatePickerShown(!isDatePickerShown)}
          />
        </$.FieldInputBox>
        {isDatePickerShown && (
          <$.DatePickerLayer>
            <DatePicker />
          </$.DatePickerLayer>
        )}
      </$.FieldSet>
      <$.SubmitButton>완료하기</$.SubmitButton>
    </$.AreaForm>
  );
};

export default AreaForm;
