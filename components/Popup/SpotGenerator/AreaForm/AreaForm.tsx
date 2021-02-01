import React, { useState } from 'react';
import DatePicker from '~/components/_common/DatePicker';
import {
  useFormDateState,
  useFormPartnerState,
} from '~/components/Popup/SpotGenerator/SpotGeneratorState';
import { toDigit } from '~/util';
import CalendarDate from '~/util/Calendar/CalendarDate';
import * as $ from './AreaFormView';

const AreaForm: React.FC = () => {
  const [isDatePickerShown, setIsDatePickerShown] = useState(false);
  const [formPartner, setFormPartner] = useFormPartnerState();
  const [formDate, setFormDate] = useFormDateState();

  const now: Date = new Date();
  const date: [number, number, number] = formDate || [
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
  ];
  const dateLabel = [toDigit(date[1], 2), toDigit(date[2], 2), date[0]].join(
    '. '
  );

  const handleClickDate = (calendarDate: CalendarDate): void => {
    setFormDate(calendarDate.getFullDate());
    setIsDatePickerShown(false);
  };

  return (
    <$.AreaForm>
      <$.FieldSet>
        <$.FieldLabel>누구와 함께 방문하셨나요</$.FieldLabel>
        <$.FieldInputBox>
          <$.InputVisitant
            value={formPartner || ''}
            placeholder="ex) 전남친, 사랑하는 엄마"
            onChange={(e) => setFormPartner(e.target.value)}
          />
        </$.FieldInputBox>
      </$.FieldSet>
      <$.FieldSet>
        <$.FieldLabel>장소를 방문한 날짜를 기록해보세요</$.FieldLabel>
        <$.FieldInputBox>
          <$.DateLabel isSelected={!!formDate}>{dateLabel}</$.DateLabel>
          <$.DatePickerOpenButton
            onClick={() => setIsDatePickerShown(!isDatePickerShown)}
          />
        </$.FieldInputBox>
        {isDatePickerShown && (
          <$.DatePickerLayer>
            <DatePicker selected={formDate} onClickDate={handleClickDate} />
          </$.DatePickerLayer>
        )}
      </$.FieldSet>
      <$.SubmitButton>완료하기</$.SubmitButton>
    </$.AreaForm>
  );
};

export default AreaForm;
